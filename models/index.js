//collecting from the user model and exporting user data
const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
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

//when user is queried, can see all posts they voted on 
User.belongsToMany(Post, {
  through: Vote,
  //name of the vote model when queried
  as: 'voted_posts',
  //foreign key in vote
  foreignKey: 'user_id'
});

//a post is queried can see all users that voted on it
Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  //foreign key in vote
  foreignKey: 'post_id'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

//to see total number of votes on a post
Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
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
module.exports = { User, Post, Vote, Comment };