const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open');
const { default: Choices } = require('inquirer/lib/objects/choices');

clear();

const prompt = inquirer.createPromptModule();

const question = [{
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
        {
            // Use chalk to style headers
            name: `Toss an ${chalk.bold("email")}?`,
            value: () => {
                open("mailto:example@example.com");
                console.log("\nLooking forward to hearing your message and replying to you!\n");
            }
        },
        {
            name: "Exit",
            value: () => {
                console.log("Good bye, have a nice day!\n");
            }
        }
    ] 
}]


const data = {
    name: chalk.bold.green("                     Alexis Montalvo"),
    handle: chalk.white("@achechi15"),
    fact: chalk.hex('#B10000')('I like to spend my time learning something new'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/xdIdontHaveOne"),
    github: chalk.hex('#787878')("https://github.com/achechi15"),
    dev: chalk.hex('#330093')("https://dev.to/IdontHaveOne"),
    dribbble: chalk.hex('#AB009C')("https://dribbble.com/IdontHaveOne"),
    website: chalk.hex('#00AB9E')("https://nextjs-blog-seven-eta-26.vercel.app/"),
    npx: chalk.hex('#A1AB00')("npx harsh"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelDev: chalk.hex('#A959FF').bold("           Dev:"),
    labelDribbble: chalk.hex('#F259FF').bold("       Dribbble:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
}


const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelDev}  ${data.dev}`,
        `${data.labelDribbble}  ${data.dribbble}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Harsh, I'm a passionate MERN stack " 
        )}`,
        `${chalk.bold("developer and web designer from India, and have a ")}`,
        `${chalk.bold(
            "hobby for creating beautiful, cool, and responsive "
        )}`,
        `${chalk.bold(
            "web apps. Toss me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
)

console.log(me);

prompt(questions).then(answer => answer.action());
