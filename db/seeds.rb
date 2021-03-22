# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')

User.create!(username: "Lakhte", email: "Lakhte", password: "Lakhte")
User.create!(username: "RyanNaing", email: "RyanNaing", password: "RyanNaing")
User.create!(username: "JohnCheung", email: "JohnCheung", password: "JohnCheung")
User.create!(username: "Demo User", email: "demo_user@demo.com", password: "password")