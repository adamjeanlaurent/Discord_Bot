exports.execute = (message, args) => {
    const month = message.guild.createdAt.getMonth() + 1;
    const year = message.guild.createdAt.getFullYear();
    const date = message.guild.createdAt.getDate();
    let serverInfo = '';
    serverInfo += `Server Name: ${message.guild.name}\n`;
    serverInfo += `Total Members: ${message.guild.memberCount}\n`;
    serverInfo += ` Created: ${message.guild.createdAt}`;

    return message.channel.send(serverInfo);
}