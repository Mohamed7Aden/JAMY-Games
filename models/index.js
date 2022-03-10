
<<<<<<< HEAD
=======
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})
Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
})

module.exports = { User, Post, Comment };
>>>>>>> 2b9d83a4dae8e8e1e8903600a9ff535bc901c6ec
