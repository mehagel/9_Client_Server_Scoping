enable :sessions

get '/' do
  erb :index
end

get '/skills/:skill' do
  @skill = params[:skill]
  erb :skills
end

get '/meals' do
  erb :meals
end

get '/funky' do
  return_meal
  end