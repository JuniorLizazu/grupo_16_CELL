module.exports = (sequelize, dataTypes) => {

    let alias = "carts";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        id_usuario: {
            type: dataTypes.INTEGER(11)
        },
        id_productos: {
            type: dataTypes.INTEGER(11)
        },
        cantidad : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
        },
        remito : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        date : {
            type : dataTypes.DATE
        }
    }

    let config = {
        tableName: "carts",
        timestamps: true,
        underscored : true
    }


    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}