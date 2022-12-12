

export const emoji = (weathers : any)=>{
switch(weathers){
    case 'broken clouds':
                return '⛈' ;
                case 'scattered clouds':
                    return '⛈';    
                    case 'overcast clouds':
                        return '⛈';    
                        case 'shower rain':
                            return '🌧';    
                            case 'light rain':
                                return '🌦';    
                                case 'moderate rain':
                                    return '🌦';    
                                    case 'Rain':
                                        return '🌧';    
                                        case 'Thunderstorm':
                                            return '🌊';    
                                            case 'few clouds':
                                                return '🌊';    
                                            case 'snow':
                                                return '🌨';    
                                                case 'mist':
                                                    return '☄️';    
                                                    case 'sky is clear':
                                                                return '☀️';
    case 'clear sky':
                return '🌦';
}
return '🍺';

}