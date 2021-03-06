# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
Video.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('videos')
Comment.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('comments')
Like.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('likes')

lakhte = User.create!(username: "Lakhte", email: "lakhte@lakhte.com", password: "Lakhte")
# ryan = User.create!(username: "RyanNaing", email: "ryan@ryan", password: "RyanNaing")
# john = User.create!(username: "JohnCheung", email: "john@john", password: "JohnCheung")
demo = User.create!(username: "Demo User", email: "demo_user@demo.com", password: "password")
# dane = User.create!(username: "Dane the TA", email: "dane@appacademy.com", password: "stonks")
anon = User.create!(username: "Anonymous", email: "anon@anon.com", password: "Anonymous")


file = open("https://bootube-seeds.s3.amazonaws.com/OrangePeel.jpeg")
demo.avatar.attach(io: file, filename: 'orangepeel')

file = open("https://bootube-seeds.s3.amazonaws.com/Lakhte.jpeg")
lakhte.avatar.attach(io: file, filename: 'lakhte')

file = open("https://bootube-seeds.s3.amazonaws.com/Anonymous.jpeg")
anon.avatar.attach(io: file, filename: 'anon')
# demo_video = Video.create!(title: "Demo 0", description: "Real programmers start counting at 0", uploader_id: 4)
# # file = open("https://bootube-seeds.s3.amazonaws.com/deadlift.mp4")
# file = open("../videos/deadlift.mp4")
# demo_video.vid.attach(io: file, filename: 'Demo')

# spider_video = Video.create!(title: "Spider making web", description: "Imagine having arachnophobia 🤡", uploader_id: 5)
# # file = open("https://bootube-seeds.s3.amazonaws.com/spiderweb.mp4")
# file = open("../videos/spider.mp4")
# spider_video.vid.attach(io: file, filename: 'spiderweb')

# grudge_video = Video.create!(title: "The Grudge (2004)", description: "Please hug me I'm scared", uploader_id: 1)
# # file = open("https://bootube-seeds.s3.amazonaws.com/grudge.mp4")
# file = open("../videos/bench.mp4")
# grudge_video.vid.attach(io: file, filename: 'grudge')

# demo_video1 = Video.create!(title: "Demo 1", description: "Demo", uploader_id: 4)
# # file = open("https://bootube-seeds.s3.amazonaws.com/grudge.mp4")
# file = open("../videos/deadlift.mp4")
# demo_video1.vid.attach(io: file, filename: 'Demo')

# demo_video2 = Video.create!(title: "Demo 2", description: "Demo", uploader_id: 4)
# # file = open("https://bootube-seeds.s3.amazonaws.com/grudge.mp4")
# file = open("../videos/deadlift.mp4")
# demo_video2.vid.attach(io: file, filename: 'Demo')

# demo_video3 = Video.create!(title: "Demo 3", description: "Demo", uploader_id: 4)
# # file = open("https://bootube-seeds.s3.amazonaws.com/grudge.mp4")
# file = open("../videos/deadlift.mp4")
# demo_video3.vid.attach(io: file, filename: 'Demo')

# demo_video4 = Video.create!(title: "Demo 4", description: "Demo", uploader_id: 4)
# # file = open("https://bootube-seeds.s3.amazonaws.com/grudge.mp4")
# file = open("../videos/deadlift.mp4")
# demo_video4.vid.attach(io: file, filename: 'Demo')

# comment1 = Comment.create!(video_id: 1, user_id: 5, body: "The only thing scary about this video is your technique!")
# comment2 = Comment.create!(video_id: 3, user_id: 5, body: "Pfft, I could watch this with my eyes closed!")
# comment3 = Comment.create!(video_id: 3, user_id: 5, body: "My old boss was scarier than her!")
# comment4 = Comment.create!(video_id: 5, user_id: 5, body: "My current boss is scarier than her!")
# comment5 = Comment.create!(video_id: 5, user_id: 1, body: "Aww, I love cats!")

