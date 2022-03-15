const Page = require('./page');

class UsersPage extends Page {
  get loadingTitle() {
    return $('#users-loading');
  }

  get usersList() {
    return $('#users-list');
  }

  get usersItem() {
    return browser.react$$('User');
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.userList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error('Не удалось загрузить пользователей');
    }
  }

  open() {
    return super.open('/users-test');
  }
}

module.exports = new UsersPage();
