await fetch('https://fcm.googleapis.com/fcm/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `key=AAAAZPgStrs:APA91bGaZuUIv_k_uI3wT-NHz76yykU_T1gLzZJAu9g9idVZEySawxtGG8-HHY52kD7NYkwG5SmVaoMhJctgRu4qIuxy5zET9zkHqM4pEudOuUK2D4YrDp0qinZxCF1b7E2MNlEoMVDL`,
  },
  body: JSON.stringify({
    to: 'fG83GHW5QN6y15kjEnmvAR:APA91bEMVISJEAZKTn8yvhgLQxvdE5Hq06Vn F1E6uqCgxGUzb3zQJtk7ZYhBjMzJebEzsEOCsYA8GDSQnlxUmg DdCpvTnlW vIXf3X49Fae5-uhyd-5MmH9cG-3xM4PkDJvjLv0IRna21',
    priority: 'normal',
    data: {
      experienceId: '@kanishkamedankara110/javaInstituteMassaging',
      scopeKey: '@kanishkamedankara110/javaInstituteMassaging',
      title: "You've got mail",
      message: 'Hello world!',
    },
  }),
});