 exports.getServerInfo = (message) => {
    return `Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount} 
    Created: ${message.guild.createdAt}`;
}

exports.getUserInfo = (message) => {
    let userinfo = '';
    const month = message.author.createdAt.getMonth() + 1;
    const year = message.author.createdAt.getFullYear();
    const date = message.author.createdAt.getDate();
    let accountCreatedDate = `${month}/${date}/${year}` ;
     
    userinfo += `Your Username: ${message.author.username}\n`;
    userinfo += `Your ID: ${message.author.id}\n`;
    userinfo += `Your Avatar: ${message.author.displayAvatarURL()}\n`;
    userinfo += ` Your Account Was Created: ${accountCreatedDate}`;
    return userinfo;
}   
