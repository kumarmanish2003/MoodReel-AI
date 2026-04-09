function generateFeed() {
  const mood = document.getElementById("mood").value;
  const outputDiv = document.getElementById("output");

  outputDiv.innerText = "⏳ Generating your feed...";

  setTimeout(() => {
    let content = "";

    if (mood === "funny") {
      content = `😂 When you open fridge again hoping new food appears

😂 Friend: “Bro 5 min” → arrives after 2 hours

😂 Indian moms: “Phone mat use karo” → sends WhatsApp forwards all day`;
    }

    else if (mood === "roast") {
      content = `🔥 You don’t need enemies, your attendance is enough

🔥 Bro studies night before exam and still asks “paper tough tha kya?”

🔥 Your WiFi is faster than your brain loading speed`;
    }

    else if (mood === "study") {
      content = `📚 “Start now. You’ll thank yourself later.”

📚 Small progress daily = big success

📚 Consistency > Motivation`;
    }

    else if (mood === "sad") {
      content = `💔 “Sometimes you outgrow people.”

💔 Late night thoughts hit different

💔 Silence says more than words`;
    }

    else if (mood === "cricket") {
      content = `🏏 Kohli chasing = pure cinema

🏏 “Next match pakka jeetenge” 🤡

🏏 IPL > Everything else in life`;
    }

    outputDiv.innerText = content;

  }, 1000);
}