import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';

clear();

const prompt = inquirer.createPromptModule();

const question = [{
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
        {
            // Use chalk to style headers
            name: `Toss an ${chalk.magenta.bold("email")}?`,
            value: () => {
                open("mailto:amoncal@upv.edu.es");
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
    name: chalk.bold.blue("                     Alexis Montalvo"),
    handle: chalk.white("@achechi15"),
    fact: chalk.cyan('I like to spend my time learning something new'),
    instagram: chalk.hex('#00A1D9')("https://www.instagram.com/amon.c_/"),
    github: chalk.hex('#787878')("https://github.com/achechi15"),
    linkedin: chalk.hex('#AB009C')("https://www.linkedin.com/in/alexis-montalvo-210b67246/"),
    website: chalk.hex('#00AB9E')("https://nextjs-blog-seven-eta-26.vercel.app/"),
    npx: chalk.hex('#A1AB00')("npx achechi15"),

    labelFact: chalk.cyan.bold("  Fun Fact:"),
    labelInstagram: chalk.hex('#629DFF').bold(" Instagram:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("    GitHub:"),
    labelLinkedin: chalk.hex('#F259FF').bold("  LinkedIn:"),
    labelWebsite: chalk.hex('#59FFC8').bold("   Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
}


const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Alexis Montalvo, I'm a passionate CS + Economics " 
        )}`,
        `${chalk.bold("Student from Spain. My hobbies are learning about the ")}`,
        `${chalk.bold(
            "financial system, analise the accounting of big companies and "
        )}`,
        `${chalk.bold(
            "developing software. Toss me an email if you want to collab!"
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

const tip = [
    `Tip: Try ${chalk.yellowBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip)

prompt(question).then(answer => answer.action());
