export const getFlags = (flag: number): string[] => {
    let flags: string[] = [];

    if (flag & 1) flags.push("Discord Staff");
    if (flag & 2) flags.push("Partnered Server Owner");
    if (flag & 4) flags.push("HypeSquad Events");
    if (flag & 8) flags.push("Level 1 Bug Hunter");
    if (flag & 64) flags.push("HypeSquad Bravery");
    if (flag & 128) flags.push("HypeSquad Brilliance");
    if (flag & 256) flags.push("HypeSquad Balance");
    if (flag & 512) flags.push("Early Supporter");
    if (flag & 16384) flags.push("Level 2 Bug Hunter");
    if (flag & 131072) flags.push("Early Verified Bot Developer");
    if (flag & 262144) flags.push("Discord Certified Moderator");

    // flags.push("Discord Staff");
    // flags.push("Partnered Server Owner");
    // flags.push("HypeSquad Events");
    // flags.push("Discord Bug Hunter");
    // flags.push("HypeSquad Bravery");
    // flags.push("HypeSquad Brilliance");
    // flags.push("HypeSquad Balance");
    // flags.push("Early Supporter");
    // flags.push("Golden Discord Bug Hunter");
    // flags.push("Early Verified Bot Developer");
    // flags.push("Discord Certified Moderator");

    console.log(flags);

    return flags;
};
