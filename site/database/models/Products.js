module.exports = (sequelize, datatypes) => {

    let alias = "Products";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : datatypes.STRING(100),
            allowNull : false
        },
        model : {
            type : datatypes.STRING(100),
            allowNull : false
        },
        price : {
            type : datatypes.DECIMAL(6,2).UNSIGNED,
            allowNull : false
        },
        colors : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        company : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        discount : {
            type : datatypes.INTEGER(11),
            allowNull: false
        },
        dualsim : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        capacidad : {
            type : datatypes.INTEGER,
            allowNull : false
        },
        image : {
            type : datatypes.STRING(100),
            allowNull : false
        },
        id_trademark : {
            type : datatypes.INTEGER(11)
        }
    }


    let config = {
        tableName : "products",
        timestamps : true,
        underscored : true
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models) {

        Product.belongsTo(models.Trademark,{ //un producto tiene una marca (N:1)
            as : "trademark",
            foreignKey : "id_trademark"
        });
        
        Product.belongsToMany(models.Users,{ //un producto tiene muchos usuarios (N:M)
            as : 'usuarios',
            through : 'carts',
            foreignKey : 'id_producto',
            otherKey : 'id_usuario',
            timestamps : false
        })

    }


    return Product
}