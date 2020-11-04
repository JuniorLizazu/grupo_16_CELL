module.exports = (sequelize, datatypes) => {

    let alias = "Trademarks";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type : datatypes.STRING(45),
            allowNull : false
        }
    }


    let config = {
        tableName : "trademark",
        timestamps : true,
        underscored : true
    }

    const Trademark = sequelize.define(alias,cols,config);

    Trademark.associate = function(models) {

        Trademark.associate = function(models){
            Trademark.hasMany(models.Products,{
                as : 'productos',
                foreignKey : 'id_trademark'
            })
        }
    }


    return Trademark
}