exports.punch = (message) => {
    const puncher = message.author.username;
    const punchee = message.mentions.users.first();
    return `${puncher} Punched ${punchee}\n https://media.giphy.com/media/l1J3G5lf06vi58EIE/giphy.gif`;
};