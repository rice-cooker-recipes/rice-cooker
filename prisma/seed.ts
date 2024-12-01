import { PrismaClient, Role, Condition } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');

  // Seed Users
  const password = await hash('changeme', 10);
  await Promise.all(
    config.defaultAccounts.map(async (account) => {
      const role: Role = account.role === 'ADMIN' ? 'ADMIN' : 'USER';
      console.log(`  Creating user: ${account.email} with role: ${role}`);
      await prisma.user.upsert({
        where: { email: account.email },
        update: {},
        create: {
          email: account.email,
          password,
          role,
        },
      });
    }),
  );

  // Seed Stuff
  await Promise.all(
    config.defaultData.map(async (data, index) => {
      let condition: Condition;
      if (data.condition === 'poor') {
        condition = 'poor';
      } else if (data.condition === 'excellent') {
        condition = 'excellent';
      } else if (data.condition === 'fair') {
        condition = 'fair';
      } else {
        condition = 'good';
      }

      console.log(`  Adding stuff: ${data.name} (${data.owner})`);
      await prisma.stuff.upsert({
        where: { id: index + 1 },
        update: {},
        create: {
          name: data.name,
          quantity: data.quantity,
          owner: data.owner,
          condition,
        },
      });
    }),
  );

  // Seed Recipes
  const recipeData = [
    {
      title: 'Hearty Chicken Stew',
      description: 'A comforting one-pot chicken stew packed with vegetables and flavor.',
      ingredients: 'Chicken, Carrots, Potatoes, Onions',
      cuisine: 'American',
      dietary: 'Non-Vegetarian',
      imageUrl: '/path-to-recipe-image1.jpg',
      link: '/recipes/chicken-stew',
    },
    {
      title: 'Vegetarian Fried Rice',
      description: 'Quick and easy fried rice with a medley of fresh vegetables.',
      ingredients: 'Rice, Bell Peppers, Carrots, Peas',
      cuisine: 'Asian',
      dietary: 'Vegetarian',
      imageUrl: '/path-to-recipe-image2.jpg',
      link: '/recipes/fried-rice',
    },
    {
      title: 'Classic Beef Chili',
      description: 'A hearty chili recipe with ground beef, beans, and spices.',
      ingredients: 'Beef, Beans, Tomatoes, Onions',
      cuisine: 'Tex-Mex',
      dietary: 'Non-Vegetarian',
      imageUrl: '/path-to-recipe-image3.jpg',
      link: '/recipes/beef-chili',
    },
  ];

  await Promise.all(
    recipeData.map(async (recipe) => {
      console.log(`  Adding recipe: ${recipe.title}`);
      await prisma.recipe.upsert({
        where: { title: recipe.title },
        update: {},
        create: {
          title: recipe.title,
          description: recipe.description,
          ingredients: recipe.ingredients,
          cuisine: recipe.cuisine,
          dietary: recipe.dietary,
          imageUrl: recipe.imageUrl,
          link: recipe.link,
        },
      });
    }),
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
