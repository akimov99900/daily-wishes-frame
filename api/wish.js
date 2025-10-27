export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const dailyWishes = [
      "🌞 May your day be filled with positive energy and joyful moments!",
      "💫 Today is your day to shine! Believe in yourself and amazing things will happen.",
      "🚀 Take a leap of faith and watch how the universe supports your dreams today.",
      "🌈 Something wonderful is about to happen. Stay open to beautiful surprises!",
      "🎯 Your hard work is about to pay off. Success is closer than you think!",
      "❤️ Today, someone will appreciate you more than you know. Spread kindness!",
      "📚 A new opportunity for learning and growth will appear. Embrace it!",
      "💰 Financial abundance is coming your way. Stay positive about money!",
      "🌙 Tonight will bring you peace and clarity. Trust your intuition.",
      "🎨 Your creativity will bloom today. Express yourself freely!"
    ];

    const randomWish = dailyWishes[Math.floor(Math.random() * dailyWishes.length)];

    const htmlResponse = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://i.imgur.com/8B3Vx2k.png" />
          <meta property="fc:frame:button:1" content="🔮 Another Wish" />
          <meta property="fc:frame:post_url" content="https://daily-wishes-frame.vercel.app/api/wish" />
          <meta property="og:image" content="https://i.imgur.com/8B3Vx2k.png" />
      </head>
      <body><div style="display: none;">${randomWish}</div></body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(htmlResponse);

  } catch (error) {
    const fallbackResponse = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://i.imgur.com/6Q3Vx1j.png" />
          <meta property="fc:frame:button:1" content="🌟 Get Daily Wish" />
          <meta property="fc:frame:post_url" content="https://daily-wishes-frame.vercel.app/api/wish" />
      </head>
      <body></body>
      </html>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(fallbackResponse);
  }
}
