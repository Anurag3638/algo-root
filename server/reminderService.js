const cron = require("node-cron");
const Task = require("./models/Task");

// Function to check and send reminders
const checkReminders = async () => {
  try {
    const now = new Date();
    const tasks = await Task.find({ reminder: { $lte: now }, completed: false });

    tasks.forEach((task) => {
      console.log(`🔔 Reminder: Task "${task.title}" is due!`);
      // In a real app, send an email, push notification, or SMS here.
    });
  } catch (error) {
    console.error("Error checking reminders:", error);
  }
};

// Run every minute
cron.schedule("* * * * *", checkReminders);

console.log("✅ Reminder service started.");
