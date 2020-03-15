exports.execute = (message, args) => {
    if(!message.mentions.users.size) {
        let userInfo = '';
        const month = message.author.createdAt.getMonth() + 1;
        const year = message.author.createdAt.getFullYear();
        const date = message.author.createdAt.getDate();
        let accountCreatedDate = `${month}/${date}/${year}` ;
       
        userInfo += `Username: ${message.author.username}\n`;
        userInfo += `ID: ${message.author.id}\n`;
        userInfo += `Avatar: ${message.author.displayAvatarURL()}\n`;
        userInfo += `Account Was Created: ${accountCreatedDate}\n`;
        return message.channel.send(userInfo);
    }
     
    const userList = message.mentions.users.map(user => {
        let userInfo = '';
        const month = user.createdAt.getMonth() + 1;
        const year = user.createdAt.getFullYear();
        const date = user.createdAt.getDate();
        let accountCreatedDate = `${month}/${date}/${year}`;
        
        userInfo += `Username: ${user.username}\n`;
        userInfo += `ID: ${user.id}\n`;
        userInfo += `Avatar: ${user.displayAvatarURL()}\n`;
        userInfo += `Account Was Created: ${accountCreatedDate}\n`;
        return userInfo;
    });
    return message.channel.send(userList);
}