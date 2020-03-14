exports.getServerInfo = (message) => {
    return `Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount} 
    Created: ${message.guild.createdAt}`;
}

exports.getSingleUserInfo = (message) => {
    let userinfo = '';
    const month = message.author.createdAt.getMonth() + 1;
    const year = message.author.createdAt.getFullYear();
    const date = message.author.createdAt.getDate();
    let accountCreatedDate = `${month}/${date}/${year}` ;
     
    userinfo += `Username: ${message.author.username}\n`;
    userinfo += `ID: ${message.author.id}\n`;
    userinfo += `Avatar: ${message.author.displayAvatarURL()}\n`;
    userinfo += `Account Was Created: ${accountCreatedDate}\n`;
    return userinfo;
}   

exports.getMultipleUserInfo = (message) => {
    const avatarList = message.mentions.users.map(user => {
        let userinfo = '';
        const month = user.createdAt.getMonth() + 1;
        const year = user.createdAt.getFullYear();
        const date = user.createdAt.getDate();
        let accountCreatedDate = `${month}/${date}/${year}`;
        
        userinfo += `Username: ${user.username}\n`;
        userinfo += `ID: ${user.id}\n`;
        userinfo += `Avatar: ${user.displayAvatarURL()}\n`;
        userinfo += `Account Was Created: ${accountCreatedDate}\n`;
        return userinfo;
    });
    return avatarList;
} 
