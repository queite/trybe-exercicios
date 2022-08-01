// const yearMiliseconds = 31536000000;
//     const now = new Date().getTime();
//     const age = (now - new Date('1986-03-26').getTime()) / yearMiliseconds;
//     console.info(age);
//     return age;

    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    console.info(randomStr)
    console.log(Date.now())
    console.info(Math.random())
    console.info(Math.random() + 1)
    console.info()
    console.info()