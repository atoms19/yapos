import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { drizzleMiddleware } from './middleware/drizzleMiddleware.js';



const app = new Hono().basePath("/api");
app.use('*',cors({
}))
app.use('*',drizzleMiddleware);
app.get('/', (c) => {
	return c.text('Hello atoms!')
})

app.get('/users', (c) => {
  
	return c.json({
		success: true,
		data: [{
			name: "billy",
			age: 20
		},
		{
			name: "moscow",
			age: 22
		},
		{
			name: "hailey",
			age: 19
		}
		]
	})
})



app.get("/posts", (c) => {
  const posts = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: [
      "Exploring the Mountains",
      "Late Night Coding Session",
      "Coffee and Clean Code",
      "Building My First SaaS",
      "Thoughts on TypeScript",
      "Weekend Photography",
      "Minimal Desk Setup",
      "Learning Docker the Hard Way",
    ][i],

    description: [
      "Spent the weekend hiking through beautiful trails. Worth every step.",
      "Finally fixed that bug after staring at it for three hours.",
      "Nothing beats a fresh cup of coffee while refactoring old code.",
      "Progress is slow but seeing everything come together feels amazing.",
      "Type safety saves more time than it costs.",
      "Captured some amazing street photos during golden hour.",
      "A clean workspace really does help with focus.",
      "Containers seemed confusing until I actually deployed something.",
    ][i],

    image: `https://picsum.photos/seed/post-${i + 1}/800/500`,

    likes: Math.floor(Math.random() * 5000),
    dislikes: Math.floor(Math.random() * 150),
    replies: Math.floor(Math.random() * 300),
    views: Math.floor(Math.random() * 50000),

    createdAt: new Date(
      Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30
    ).toISOString(),

    user: {
      id: i + 100,
      name: [
        "Alex Carter",
        "Sophia Kim",
        "Liam Wilson",
        "Emma Brown",
        "Noah Davis",
        "Olivia Taylor",
        "Ethan Moore",
        "Ava Johnson",
      ][i],

      handle: [
        "@alexdev",
        "@sophiak",
        "@liamcodes",
        "@emmab",
        "@noahd",
        "@oliviat",
        "@ethanm",
        "@avaj",
      ][i],

      avatar: `https://picsum.photos/seed/user-${i + 1}/100/100`,
    },
  }));

  return c.json({
    success:true,
	 data:posts
  });
});

serve({
	fetch: app.fetch,
	port: 3001
}, (info) => {
	console.log(`Server is running on http://localhost:${info.port}`)
})
