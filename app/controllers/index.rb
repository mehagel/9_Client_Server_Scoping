enable :sessions



get '/' do
  erb :index
end

get '/skills/:skill' do
  p params
  @skill = params[:skill]
  erb :skills
end

get '/meals' do
  @meals = ["Spaghetti",
            "Ravioli",
            "Hummus and Veggies",
            "Pizza",
            "Falafel",
            "Sushi",
            "Linguini",
            "Onigilli"]
  @meal = @meals.sample          
  erb :meals
end


