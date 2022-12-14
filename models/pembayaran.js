'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.siswa,{
        foreignKey: 'id_siswa',
        as: 'siswa'
      })
      this.belongsTo(models.petugas,{
        foreignKey: 'id_petugas',
        as: 'petugas'
      })
    }
  }
  pembayaran.init({
    id_pembayaran: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_petugas: DataTypes.INTEGER,
    id_siswa: DataTypes.INTEGER,
    tgl_bayar: DataTypes.DATE,
    bulan_spp: DataTypes.INTEGER,
    tahun_spp: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembayaran',
    tableName: 'pembayaran'
  });
  return pembayaran;
};