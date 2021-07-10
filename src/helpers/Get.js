const Get = {
  tasks() {
    return [
      { id: "1", name: "Coutts persona appointement", hours: 1 },
      { id: "2", name: "Board of directores meeting", hours: 3 },
      { id: "3", name: "Design workshop with John Lewis", hours: 3 },
    ];
  },

  time() {
    let time = [];
    for (let i = 9; i <= 18; i++) {
      time.push(i < 10 ? "0" + i + ":00" : i + ":00");
    }
    return time;
  },

  color() {
    const colors = [
      "rgba(255, 157, 219, 0.489)",
      "rgba(203, 110, 219, 0.489)",
      "rgba(219, 154, 20, 0.489)",
      "rgba(50, 178, 225, 0.489)",
      "rgba(197, 14, 200, 0.489)",
      "rgba(157, 154, 125, 0.489)",
      "rgba(100, 84, 110, 0.489)",
      "rgba(10, 234, 3, 0.489)",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  },
  normalizedDate(date) {
    return new Intl.DateTimeFormat("en-GB", {
      month: "long",
      day: "2-digit",
    }).format(date);
  },
};

export default Get;
