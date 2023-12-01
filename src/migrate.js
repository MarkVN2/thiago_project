const sequelize = require('./sequelize');
const User = require('./models/User');

async function migrate() {
  try {
    await sequelize.sync({ force: true });
    console.log('Tabelas sincronizadas com sucesso.');
  } catch (error) {
    console.error('Erro ao sincronizar tabelas:', error);
  } finally {
    process.exit();
  }
}

migrate();