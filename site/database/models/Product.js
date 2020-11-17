module.exports = (sequelize, dataTypes) => {

    let alias = "Products";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        model : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        price : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        colors : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        company : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        discount : {
            type : dataTypes.INTEGER(11),
            allowNull: false
        },
        dualsim : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        capacidad : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        image : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        description : {
            type : dataTypes.STRING(300),
            allowNull : false
        },
        id_trademark : {
            type : dataTypes.INTEGER(11),
            allowNull : false
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
            foreignKey : 'id_productos',
            otherKey : 'id_usuario',
            timestamps : false
        })

    }


    return Product
}