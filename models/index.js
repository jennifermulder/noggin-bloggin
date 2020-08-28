//collecting from the user model and exporting user data
const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment');

// create associations
//user can have many models associated to it
User.hasMany(Post, {
  foreignKey: "user_id",
});

//user only belongs to post
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

//a comment can only have one user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

//a comment can only have one post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

//exporting object with user model as a property
module.exports = { User, Post, Comment };