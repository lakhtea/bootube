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

lakhte = User.create!(username: "Lakhte", email: "Lakhte", password: "Lakhte")
ryan = User.create!(username: "RyanNaing", email: "RyanNaing", password: "RyanNaing")
john = User.create!(username: "JohnCheung", email: "JohnCheung", password: "JohnCheung")
demo = User.create!(username: "Demo User", email: "demo_user@demo.com", password: "password")
dane = User.create!(username: "Dane the TA", email: "dane@appacademy.com", password: "stonks")

demo_video = Video.create!(title: "Demo", description: "Demo", uploader_id: 4)
file = open("https://bootube-dev.s3.amazonaws.com/xJTKJrAgrk9ZAhzxd56woi71")
demo_video.vid.attach(io: file, filename: 'Demo')

spider_video = Video.create!(title: "Spider making web", description: "Imagine having arachnophobia 🤡", uploader_id: 5)
file = open("https://bootube-dev.s3.amazonaws.com/spiderweb.mp4")
spider_video.vid.attach(io: file, filename: 'spiderweb')

grudge_video = Video.create!(title: "The Grudge (2004)", description: "Please hug me I'm scared", uploader_id: 1)
file = open("https://bootube-dev.s3.amazonaws.com/grudge.mp4")
grudge_video.vid.attach(io: file, filename: 'grudge')
