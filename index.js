const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contactService = require ("./contacts.js");

const invokeAction = async ({ action, contactId, name, email, phone }) => {
  switch (action) {
    case "list":
        const listContacts = await contactService.listContacts();
        return console.log(listContacts);
      
    case "getContactById":
      const oneContact = await contactService.getContactById(contactId);
      return console.log(oneContact);

    case "removeContact":
      const deleteContact = await contactService.removeContact(contactId);
      return console.log(deleteContact);

    case "addContact":
      const newContact = await contactServic.addContact(contactId, {name, email, phone});
      return console.log(newContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

