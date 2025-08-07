import { Letter } from '../types';

export const letters: Letter[] = [
  {
    id: 'emotional-heaviness',
    title: 'In moments of emotional heaviness',
    category: 'comfort',
    gradient: 'from-parchment-200 via-parchment-300 to-parchment-400',
    content: {
      message: `Hey you,

I know your heart feels really heavy right now. And I just want to say—it’s okay. You don’t have to hide it or be strong all the time. Whatever you’re feeling, it matters. It’s real.

Some days just feel heavier than others, and it’s hard to explain why. But please remember, even in this moment, you’re doing your best—and that’s enough.

You don’t have to fix everything today. Just take a deep breath. Maybe get some rest. Drink some water. Let the quiet be gentle on you.

You are loved. More than you know. This hard moment will pass, just like all the others you’ve survived before.

And when it does, I’ll still be here. Rooting for you. Always.`,
    
    quote: "One day at a time, one breath at a time. You’ve got this.",
    
    reflection: "It’s okay to feel low sometimes. It doesn’t mean you’re weak—it means you’re human. And you’re allowed to take your time to feel better."
    }
  },
  {
    id: 'distance-difficulty',
  title: 'Open when distance feels hard',
  category: 'connection',
  gradient: 'from-parchment-300 via-vintage-sepia to-parchment-500',
  content: {
    message: `Hey there,

I know being away from the people you care about can feel really tough. Sometimes the distance makes everything feel a bit heavier. And it’s okay to miss them deeply.

But just because someone isn't right beside you doesn’t mean they’ve left your life. They’re still with you—in your memories, in your thoughts, in the little things that remind you of them. They’re just a call, a message, or even a memory away.

You’re still connected. The love, the bond, the moments you’ve shared—none of that fades just because of space or time.

Hold on to the good times, and remind yourself that this is temporary. You’ll be with them again, and it’ll be worth the wait.

Until then, take care of yourself. They would want that too.`,
    
    quote: "Miles apart, but never truly away from each other’s hearts.",
    
    reflection: "Missing someone is hard, but it’s also a reminder of how much they matter. That kind of love doesn't fade with distance—it grows."
    }
  },
  {
    id: 'questioning-strength',
  title: "Open when you're questioning your strength",
  category: 'empowerment',
  gradient: 'from-parchment-400 via-vintage-brown to-parchment-600',
  content: {
    message: `Hey,

I know you might be feeling unsure of yourself right now. Maybe everything feels like too much, and you're starting to wonder if you can really handle it all.

But let me remind you—look at how far you've already come. You’ve been through hard days before, and you made it through them. That’s not luck. That’s strength.

Strength doesn’t always look loud or powerful. Sometimes, it looks like just getting out of bed when you don’t feel like it. Or being kind to others even when you’re hurting inside. Or simply taking one small step forward when you’re full of doubt.

It’s okay to feel tired. It’s okay to feel unsure. That doesn’t make you weak—it makes you human. But don’t forget: you’ve picked yourself up so many times before. You’re doing better than you think.

You're stronger than these thoughts. And I believe in you—even when you’re struggling to believe in yourself.`,
    
    quote: "Strength is not about never falling—it's about rising every time you do.",
    
    reflection: "Feeling unsure of yourself is part of growing. Don’t let this moment make you forget all the strong ones that came before it."
    }
  },
  {
    id: 'self-doubt',
  title: 'Open when self-doubt creeps in',
  category: 'confidence',
  gradient: 'from-vintage-sepia via-parchment-300 to-vintage-brown',
  content: {
    message: `Hey,

I know you’re doubting yourself right now. Maybe your mind is telling you that you’re not good enough or that you can’t do it. But let me tell you something—just because your mind says it, doesn’t mean it’s true.

Self-doubt shows up for all of us. It’s that little voice that questions everything. But look back for a second. How many times has that voice been wrong? So many times, right?

You’ve made it through challenges you thought you couldn’t. You’ve learned things you thought were too hard. You’ve shown up, even on the days when it felt impossible. That’s strength. That’s proof.

You don’t need to have it all figured out right now. You don’t have to be perfect. You just need to keep trying, keep showing up, and keep being kind to yourself.

You are doing better than you think. You are more capable than you feel. And no matter what your doubts say—you belong here, and you are enough. Always.`,
    
    quote: "You've made it through 100% of your worst days. Don't let one thought undo all your strength.",
    
    reflection: "Self-doubt is normal, but it doesn't define you. You've already proved it wrong more times than you realize."
    }
  },
  {
    id: 'personal-pride',
  title: 'Open when you feel proud of yourself',
  category: 'celebration',
  gradient: 'from-parchment-500 via-vintage-gold to-vintage-brown',
  content: {
    message: `Hey you,

Look at you. You did it.

I hope you're taking a moment right now—not just to smile at what you've achieved, but to feel proud of everything it took to get here. The effort, the time, the patience, the setbacks—you kept going, even when things got hard. That’s something to be really proud of.

This isn’t just about reaching a goal. It’s about believing in yourself when it was tough. It’s about showing up, again and again, when no one was watching. You’ve grown so much—and not just in what you’ve done, but in who you are.

Let yourself feel proud. You’ve earned this. You didn’t give up, and that matters more than you know.

You’re capable of so much, and this moment is just a reminder of what you can do. Keep this feeling close. Let it remind you of your strength the next time things get tough.`,
    
    quote: "You did it. And I hope you never forget how far you've come.",
    
    reflection: "Feeling proud of yourself isn’t selfish—it’s self-love. It’s proof that you’ve worked hard and grown into someone even stronger."
    }
  },
  {
    id: 'new-beginnings',
  title: "Open when you're starting something new",
  category: 'growth',
  gradient: 'from-parchment-400 via-vintage-sepia to-parchment-700',
  content: {
    message: `Hey you,

Starting something new can feel scary—and that’s completely normal. It's okay if you're nervous, unsure, or even doubting yourself a little. It just means you care.

But remember this: no one starts out knowing everything. Every person you look up to once stood where you are—at the beginning, with shaky hands and a hopeful heart.

You're not supposed to have it all figured out right away. You’re just supposed to start. Learn as you go. Make mistakes. Grow from them. Keep showing up.

What matters most is your willingness to try. And the fact that you’re doing that? That already makes you brave.

Take things one step at a time. Be kind to yourself. You've got more strength in you than you realize—and you're going to surprise yourself in the best way.`,
    
    quote: "You don’t have to be great to start, but you have to start to be great.",
    
    reflection: "New beginnings don’t need perfection. They just need courage, and you’ve already shown that by taking the first step."
    }
  }
];

export const getLetterById = (id: string): Letter | undefined => {
  return letters.find(letter => letter.id === id);
};

export const getLettersByCategory = (category: string): Letter[] => {
  return letters.filter(letter => letter.category === category);
};
