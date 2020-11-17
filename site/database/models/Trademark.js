module.exports = (sequelize, dataTypes) => {

    let alias = "Trademark";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        image: {
            type : dataTypes.STRING(100),
            allowNull : false
        }
    }


    let config = {
        tableName : "trademark",
        timestamps : false,
        underscored : true
    }

    const Trademark = sequelize.define(alias,cols,config);

        Trademark.associate = function(models){
            Trademark.hasMany(models.Products,{
                as : 'productos',
                foreignKey : 'id_trademark'
            })
        }


    return Trademark
}