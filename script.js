// ================= Football Team Data =================
const trophiesRankings = {
    "Real Madrid": "1st",
    "Barcelona": "2nd",
    "Bayern Munich": "3rd",
    "Manchester United": "4th",
    "Juventus": "5th",
    "Liverpool": "6th",
    "Paris Saint-Germain": "7th",
    "Arsenal": "8th",
    "AC Milan": "9th",
    "Internazionale": "10th",
    "Athletic Bilbao": "11th",
    "Atlético Madrid": "12th",
    "Marseille": "13th",
    "Saint-Étienne": "14th",
    "Aston Villa": "15th",
    "Valencia": "15th",
    "Roma": "17th",
    "Borussia Dortmund": "17th",
    "Everton": "19th",
    "Sevilla": "20th",
    "Tottenham Hotspur": "21st",
    "Lyon": "21st",
    "Nantes": "21st",
    "Torino": "21st",
    "Newcastle United": "25th",
    "Borussia Mönchengladbach": "25th",
    "Werder Bremen": "25th",
    "Lille": "25th",
    "Napoli": "25th",
    "Chelsea": "30th",
    "Manchester City": "30th",
    "Fiorentina": "32nd",
    "Eintracht Frankfurt": "32nd",
    "VfB Stuttgart": "32nd",
    "Auxerre": "32nd",
    "Reims": "32nd",
    "Genoa": "37th",
    "Bologna": "37th",
    "Lazio": "37th",
    "Wolverhampton Wanderers": "40th",
    "Nice": "40th",
    "Nottingham Forest": "42nd",
    "West Ham United": "43rd",
    "VfL Wolfsburg": "43rd",
    "Rennes": "43rd",
    "Montpellier": "43rd",
    "Parma": "43rd",
    "Espanyol": "48th",
    "Real Betis": "48th",
    "Strasbourg": "48th",
    "Bayer Leverkusen": "48th",
    "Leicester City": "52nd",
    "Ipswich Town": "53rd",
    "Villarreal": "54th",
    "Mallorca": "54th",
    "Le Havre": "54th",
    "Lens": "54th",
    "Atalanta": "54th",
    "Hellas Verona": "54th",
    "Cagliari": "54th",
    "Venezia": "54th",
    "RB Leipzig": "62nd",
    "Holstein Kiel": "62nd",
    "Toulouse": "62nd",
    "Southampton": "65th",
    "Angers": "66th",
    "Brest": "66th",
    "Lecce": "66th",
    "Monza": "66th",
    "Empoli": "66th",
    "Udinese": "66th",
    "Como": "66th",
    "Crystal Palace": "73rd",
    "Brighton & Hove Albion": "73rd",
    "Fulham": "73rd",
    "Bournemouth": "73rd",
    "Brentford": "73rd",
    "Celta Vigo": "73rd",
    "Osasuna": "73rd",
    "Las Palmas": "73rd",
    "Valladolid": "73rd",
    "Girona": "73rd",
    "Leganés": "73rd",
    "Alavés": "73rd",
    "Rayo Vallecano": "73rd",
    "Getafe": "73rd",
    "TSG Hoffenheim": "73rd",
    "SC Freiburg": "73rd",
    "Mainz 05": "73rd",
    "VfL Bochum": "73rd",
    "FC Augsburg": "73rd",
    "Union Berlin": "73rd",
    "FC St. Pauli": "73rd",
    "1. FC Heidenheim": "73rd"
};
const squadAgeRankings = {
    "Strasbourg": "1st",
    "VfB Stuttgart": "2nd",
    "Chelsea": "3rd",
    "Parma": "4th",
    "Paris Saint-Germain": "5th",
    "Bournemouth": "6th",
    "Juventus": "7th",
    "Monaco": "8th",
    "RB Leipzig": "9th",
    "Brentford": "10th",
    "Reims": "11th",
    "Borussia Dortmund": "12th",
    "Toulouse": "13th",
    "Tottenham Hotspur": "14th",
    "Eintracht Frankfurt": "15th",
    "Barcelona": "16th",
    "Rennes": "17th",
    "VfL Wolfsburg": "18th",
    "Auxerre": "19th",
    "Hellas Verona": "20th",
    "Empoli": "21st",
    "AC Milan": "22nd",
    "Venezia": "22nd",
    "Real Sociedad": "24th",
    "Valencia": "25th",
    "Fiorentina": "26th",
    "Bologna": "26th",
    "TSG Hoffenheim": "28th",
    "Udinese": "29th",
    "Southampton": "30th",
    "Crystal Palace": "30th",
    "Sevilla": "30th",
    "Espanyol": "30th",
    "Lecce": "34th",
    "Brighton & Hove Albion": "35th",
    "Nice": "35th",
    "Lyon": "37th",
    "Genoa": "38th",
    "Marseille": "39th",
    "Holstein Kiel": "40th",
    "FC Augsburg": "40th",
    "Borussia Mönchengladbach": "40th",
    "Torino": "43rd",
    "Como": "43rd",
    "Wolverhampton Wanderers": "45th",
    "Manchester United": "45th",
    "Alavés": "47th",
    "Roma": "48th",
    "Werder Bremen": "49th",
    "FC St. Pauli": "49th",
    "Liverpool": "51st",
    "Atalanta": "52nd",
    "Manchester City": "53rd",
    "Celta Vigo": "54th",
    "Bayer Leverkusen": "55th",
    "Arsenal": "56th",
    "Valladolid": "57th",
    "Real Madrid": "57th",
    "Le Havre": "59th",
    "Leicester City": "60th",
    "Ipswich Town": "60th",
    "1. FC Heidenheim": "60th",
    "Getafe": "63rd",
    "Monza": "64th",
    "Athletic Bilbao": "65th",
    "VfL Bochum": "65th",
    "Villarreal": "67th",
    "SC Freiburg": "67th",
    "Las Palmas": "69th",
    "Girona": "69th",
    "Lens": "71st",
    "Nottingham Forest": "72nd",
    "Mainz 05": "72nd",
    "Union Berlin": "74th",
    "Aston Villa": "75th",
    "Bayern Munich": "75th",
    "Saint-Étienne": "77th",
    "Leganés": "78th",
    "Montpellier": "79th",
    "Cagliari": "80th",
    "Lazio": "80th",
    "Angers": "82nd",
    "Real Betis": "83rd",
    "Brest": "84th",
    "Everton": "85th",
    "Fulham": "86th",
    "Osasuna": "87th",
    "West Ham United": "88th",
    "Nantes": "89th",
    "Lille": "90th",
    "Newcastle United": "91st",
    "Mallorca": "92nd",
    "Napoli": "93rd",
    "Atlético Madrid": "94th",
    "Internazionale": "95th",
    "Rayo Vallecano": "96th"
};
const marketValueRankings = {
    "Manchester City": "1st",
    "Real Madrid": "2nd",
    "Arsenal": "3rd",
    "Barcelona": "4th",
    "Liverpool": "5th",
    "Paris Saint-Germain": "6th",
    "Chelsea": "7th",
    "Bayern Munich": "8th",
    "Tottenham Hotspur": "9th",
    "Internazionale": "10th",
    "Manchester United": "11th",
    "Juventus": "12th",
    "Newcastle United": "13th",
    "Bayer Leverkusen": "14th",
    "Aston Villa": "15th",
    "AC Milan": "16th",
    "Brighton & Hove Albion": "17th",
    "Atalanta": "18th",
    "RB Leipzig": "19th",
    "Atlético Madrid": "20th",
    "Napoli": "21st",
    "West Ham United": "22nd",
    "Nottingham Forest": "23rd",
    "Borussia Dortmund": "24th",
    "Crystal Palace": "25th",
    "Bournemouth": "26th",
    "Roma": "27th",
    "Brentford": "28th",
    "Lazio": "29th",
    "Wolverhampton Wanderers": "30th",
    "Bologna": "31st",
    "Fiorentina": "32nd",
    "Monaco": "33rd",
    "Everton": "34th",
    "Fulham": "35th",
    "VfB Stuttgart": "36th",
    "Eintracht Frankfurt": "37th",
    "Lille": "38th",
    "Real Sociedad": "39th",
    "Marseille": "40th",
    "Athletic Bilbao": "41st",
    "Lyon": "42nd",
    "Strasbourg": "43rd",
    "Ipswich Town": "44th",
    "Nice": "45th",
    "Rennes": "46th",
    "Leicester City": "47th",
    "Southampton": "48th",
    "VfL Wolfsburg": "49th",
    "Torino": "50th",
    "Villarreal": "51st",
    "Valencia": "52nd",
    "Como": "53rd",
    "Girona": "54th",
    "Genoa": "55th",
    "Udinese": "56th",
    "Parma": "57th",
    "Sevilla": "58th",
    "Real Betis": "59th",
    "TSG Hoffenheim": "60th",
    "SC Freiburg": "61st",
    "Lens": "62nd",
    "Las Palmas": "63rd",
    "Mainz 05": "64th",
    "Borussia Mönchengladbach": "65th",
    "Brest": "66th",
    "Werder Bremen": "67th",
    "Reims": "68th",
    "FC Augsburg": "69th",
    "Nantes": "70th",
    "Union Berlin": "71st",
    "Toulouse": "72nd",
    "Empoli": "73rd",
    "Osasuna": "74th",
    "Hellas Verona": "75th",
    "Celta Vigo": "76th",
    "Monza": "77th",
    "Espanyol": "78th",
    "Cagliari": "79th",
    "Lecce": "80th",
    "Venezia": "81st",
    "Mallorca": "82nd",
    "Getafe": "83rd",
    "1. FC Heidenheim": "84th",
    "Alavés": "85th",
    "Auxerre": "86th",
    "FC St. Pauli": "87th",
    "Le Havre": "88th",
    "Rayo Vallecano": "89th",
    "VfL Bochum": "90th",
    "Saint-Étienne": "91st",
    "Montpellier": "92nd",
    "Holstein Kiel": "93rd",
    "Angers": "94th",
    "Valladolid": "95th",
    "Leganés": "96th"
};
const stadiumCapacityRankings = {    
    "Barcelona": "1st",
    "Borussia Dortmund": "2nd",
    "Real Madrid": "3rd",
    "Internazionale": "4th",
    "AC Milan": "4th",
    "Bayern Munich": "6th",
    "Manchester United": "7th",
    "Atlético Madrid": "8th",
    "Lazio": "9th",
    "Roma": "9th",
    "Marseille": "11th",
    "Tottenham Hotspur": "12th",
    "West Ham United": "13th",
    "Liverpool": "14th",
    "Real Betis": "15th",
    "Arsenal": "16th",
    "VfB Stuttgart": "17th",
    "Lyon": "18th",
    "Eintracht Frankfurt": "19th",
    "Napoli": "20th",
    "Borussia Mönchengladbach": "21st",
    "Athletic Bilbao": "22nd",
    "Manchester City": "23rd",
    "Everton": "24th",
    "Newcastle United": "25th",
    "Lille": "26th",
    "Valencia": "27th",
    "Paris Saint-Germain": "28th",
    "RB Leipzig": "29th",
    "Sevilla": "30th",
    "Fiorentina": "31st",
    "Aston Villa": "32nd",
    "Espanyol": "33rd",
    "Werder Bremen": "34th",
    "Saint-Étienne": "35th",
    "Juventus": "36th",
    "Chelsea": "37th",
    "Real Sociedad": "38th",
    "Lens": "39th",
    "Bologna": "40th",
    "Nice": "41st",
    "Nantes": "42nd",
    "SC Freiburg": "43rd",
    "Mainz 05": "44th",
    "Genoa": "45th",
    "Toulouse": "46th",
    "Montpellier": "47th",
    "Las Palmas": "48th",
    "Southampton": "49th",
    "Leicester City": "50th",
    "Brighton & Hove Albion": "51st",
    "Wolverhampton Wanderers": "52nd",
    "Hellas Verona": "53rd",
    "FC Augsburg": "54th",
    "Bayer Leverkusen": "55th",
    "TSG Hoffenheim": "56th",
    "Ipswich Town": "57th",
    "FC St. Pauli": "58th",
    "VfL Wolfsburg": "59th",
    "Strasbourg": "60th",
    "Rennes": "61st",
    "Lecce": "62nd",
    "Nottingham Forest": "63rd",
    "Mallorca": "64th",
    "Villarreal": "65th",
    "Alavés": "66th",
    "Crystal Palace": "67th",
    "Udinese": "68th",
    "Atalanta": "69th",
    "Le Havre": "70th",
    "Auxerre": "71st",
    "Parma": "72nd",
    "Reims": "73rd",
    "Celta Vigo": "74th",
    "Angers": "75th",
    "Cagliari": "76th",
    "Empoli": "77th",
    "Getafe": "78th",
    "Holstein Kiel": "79th",
    "1. FC Heidenheim": "80th",
    "Como": "81st",
    "Rayo Vallecano": "82nd",
    "Girona": "83rd",
    "Leganés": "84th",
    "Monza": "85th",
    "Brentford": "86th",
    "Fulham": "87th",
    "Monaco": "88th",
    "VfL Bochum": "89th",
    "Union Berlin": "90th",
    "Brest": "91st",
    "Venezia": "92nd",
    "Bournemouth": "93rd"
};

const homegrownRankings = {
    "Athletic Bilbao": "1st",
    "Real Sociedad": "2nd",
    "Barcelona": "3rd",
    "Valencia": "4th",
    "Celta Vigo": "4th",
    "TSG Hoffenheim": "6th",
    "Espanyol": "7th",
    "SC Freiburg": "8th",
    "Liverpool": "9th",
    "Borussia Dortmund": "10th",
    "Mainz 05": "10th",
    "Osasuna": "12th",
    "Toulouse": "13th",
    "Rennes": "13th",
    "Lecce": "15th",
    "Bayern Munich": "16th",
    "VfB Stuttgart": "16th",
    "Villarreal": "18th",
    "Las Palmas": "18th",
    "Paris Saint-Germain": "20th",
    "Monaco": "20th",
    "Montpellier": "20th",
    "Atalanta": "23rd",
    "Parma": "23rd",
    "Manchester United": "25th",
    "Chelsea": "25th",
    "Lyon": "27th",
    "Le Havre": "27th",
    "Reims": "27th",
    "Auxerre": "27th",
    "Saint-Étienne": "27th",
    "Juventus": "32nd",
    "Fiorentina": "32nd",
    "Genoa": "32nd",
    "Manchester City": "35th",
    "Crystal Palace": "35th",
    "Brighton & Hove Albion": "35th",
    "Real Madrid": "38th",
    "Sevilla": "38th",
    "Lille": "39th",
    "Nice": "39th",
    "Nantes": "39th",
    "Angers": "39th",
    "Monza": "43rd",
    "Empoli": "43rd",
    "Hellas Verona": "43rd",
    "Udinese": "43rd",
    "Cagliari": "43rd",
    "Torino": "43rd",
    "Southampton": "49th",
    "Tottenham Hotspur": "49th",
    "Leicester City": "49th",
    "Borussia Mönchengladbach": "52nd",
    "VfL Bochum": "52nd",
    "Atlético Madrid": "54th",
    "Real Betis": "54th",
    "Mallorca": "54th",
    "Valladolid": "54th",
    "VfL Wolfsburg": "58th",
    "Werder Bremen": "58th",
    "1. FC Heidenheim": "58th",
    "Strasbourg": "61st",
    "Internazionale": "62nd",
    "Roma": "62nd",
    "AC Milan": "62nd",
    "Arsenal": "65th",
    "Newcastle United": "65th",
    "Bayer Leverkusen": "67th",
    "FC Augsburg": "67th",
    "Como": "69th",
    "Bologna": "69th",
    "Lazio": "69th",
    "Aston Villa": "72nd",
    "Fulham": "72nd",
    "West Ham United": "72nd",
    "Bournemouth": "72nd",
    "Brest": "76th",
    "RC Lens": "76th",
    "Union Berlin": "78th",
    "FC St. Pauli": "78th",
    "Napoli": "80th",
    "Nottingham Forest": "81st",
    "Ipswich Town": "81st",
    "Everton": "81st",
    "Wolverhampton Wanderers": "81st",
    "RB Leipzig": "85th",
    "Eintracht Frankfurt": "85th",
    "Girona": "87th",
    "Leganés": "87th",
    "Alavés": "87th",
    "Rayo Vallecano": "87th",
    "Getafe": "87th",
    "Marseille": "92nd",
    "Venezia": "93rd",
    "Brentford": "94th",
    "Holstein Kiel": "94th"
};
const foreignPlayersRankings = {
    "Lecce": "1st",
    "Wolverhampton Wanderers": "2nd",
    "Udinese": "3rd",
    "Torino": "4th",
    "Parma": "4th",
    "Hellas Verona": "4th",
    "TSG Hoffenheim": "7th",
    "Como": "8th",
    "Venezia": "8th",
    "Lazio": "10th",
    "Marseille": "11th",
    "Manchester City": "12th",
    "Tottenham Hotspur": "12th",
    "Brentford": "12th",
    "Leicester City": "12th",
    "VfL Wolfsburg": "16th",
    "Juventus": "17th",
    "AC Milan": "17th",
    "Bayer Leverkusen": "19th",
    "Eintracht Frankfurt": "19th",
    "Brighton & Hove Albion": "21st",
    "Fulham": "21st",
    "Monaco": "23rd",
    "Reims": "23rd",
    "RB Leipzig": "25th",
    "FC St. Pauli": "25th",
    "Bologna": "27th",
    "Nottingham Forest": "28th",
    "Internazionale": "29th",
    "Roma": "29th",
    "Genoa": "29th",
    "Lille": "32nd",
    "Strasbourg": "32nd",
    "Arsenal": "34th",
    "Liverpool": "34th",
    "Chelsea": "34th",
    "Manchester United": "34th",
    "West Ham United": "34th",
    "Bournemouth": "34th",
    "Nice": "40th",
    "Rennes": "40th",
    "Lens": "40th",
    "Toulouse": "40th",
    "Auxerre": "40th",
    "Valladolid": "45th",
    "FC Augsburg": "46th",
    "Lyon": "47th",
    "Angers": "47th",
    "Real Madrid": "49th",
    "Southampton": "50th",
    "Bayern Munich": "51st",
    "VfB Stuttgart": "51st",
    "Union Berlin": "51st",
    "Paris Saint-Germain": "54th",
    "Le Havre": "54th",
    "Montpellier": "54th",
    "Atlético Madrid": "57th",
    "Aston Villa": "58th",
    "Borussia Dortmund": "59th",
    "Borussia Mönchengladbach": "59th",
    "Girona": "61st",
    "Empoli": "62nd",
    "Everton": "63rd",
    "Ipswich Town": "63rd",
    "VfL Bochum": "65th",
    "Nantes": "66th",
    "Sevilla": "67th",
    "SC Freiburg": "68th",
    "Werder Bremen": "68th",
    "Atalanta": "70th",
    "Napoli": "70th",
    "Real Betis": "72nd",
    "Saint-Étienne": "73rd",
    "Villarreal": "74th",
    "Leganés": "74th",
    "Holstein Kiel": "76th",
    "Crystal Palace": "77th",
    "Mallorca": "78th",
    "Getafe": "78th",
    "Alavés": "78th",
    "Brest": "81st",
    "Mainz 05": "82nd",
    "Valencia": "83rd",
    "Las Palmas": "83rd",
    "Rayo Vallecano": "83rd",
    "Monza": "86th",
    "Cagliari": "86th",
    "Newcastle United": "88th",
    "Barcelona": "89th",
    "Real Sociedad": "89th",
    "Espanyol": "89th",
    "Fiorentina": "92nd",
    "Celta Vigo": "93rd",
    "1. FC Heidenheim": "94th",
    "Osasuna": "95th",
    "Athletic Bilbao": "96th"
};
const clubAgeRankings = {
    "Nottingham Forest": "1st",
    "Aston Villa": "2nd",
    "Wolverhampton Wanderers": "3rd",
    "Everton": "4th",
    "Ipswich Town": "5th",
    "Fulham": "6th",
    "Le Havre": "7th",
    "Manchester City": "8th",
    "Tottenham Hotspur": "9th",
    "Leicester City": "10th",
    "Southampton": "11th",
    "Arsenal": "12th",
    "Sevilla": "13th",
    "Brentford": "14th",
    "Genoa": "15th",
    "VfB Stuttgart": "16th",
    "Liverpool": "17th",
    "Newcastle United": "18th",
    "Udinese": "19th",
    "West Ham United": "20th",
    "Juventus": "21st",
    "Werder Bremen": "22nd",
    "Eintracht Frankfurt": "23rd",
    "TSG Hoffenheim": "23rd",
    "Marseille": "25th",
    "AC Milan": "26th",
    "Athletic Bilbao": "27th",
    "Lazio": "28th",
    "Barcelona": "29th",
    "Rennes": "30th",
    "Hellas Verona": "31st",
    "Espanyol": "32nd",
    "Bayern Munich": "33rd",
    "Borussia Mönchengladbach": "34th",
    "Holstein Kiel": "35th",
    "Torino": "36th",
    "Venezia": "37th",
    "Real Madrid": "38th",
    "Nice": "39th",
    "Como": "40th",
    "Atalanta": "41st",
    "Atlético Madrid": "42nd",
    "Auxerre": "43rd",
    "Strasbourg": "44th",
    "Lens": "44th",
    "Internazionale": "46th",
    "Lecce": "46th",
    "SC Freiburg": "48th",
    "Bayer Leverkusen": "49th",
    "Mainz 05": "50th",
    "Bologna": "51st",
    "Real Betis": "52nd",
    "FC Augsburg": "53rd",
    "Borussia Dortmund": "54th",
    "Real Sociedad": "55th",
    "Monza": "56th",
    "Parma": "57th",
    "FC St. Pauli": "58th",
    "Mallorca": "59th",
    "Valencia": "60th",
    "Angers": "61st",
    "Osasuna": "62nd",
    "Alavés": "63rd",
    "Villarreal": "64th",
    "Celta Vigo": "65th",
    "Monaco": "66th",
    "Rayo Vallecano": "67th",
    "Valladolid": "68th",
    "Leganés": "68th",
    "Empoli": "70th",
    "Cagliari": "70th",
    "Napoli": "72nd",
    "Fiorentina": "72nd",
    "Reims": "74th",
    "Roma": "75th",
    "Saint-Étienne": "76th",
    "Toulouse": "77th",
    "Nantes": "78th",
    "Lille": "79th",
    "VfL Wolfsburg": "80th",
    "Girona": "81st",
    "Brest": "82nd",
    "Lyon": "83rd",
    "Paris Saint-Germain": "84th",
    "VfL Bochum": "85th",
    "Montpellier": "86th",
    "Union Berlin": "87th",
    "Las Palmas": "88th",
    "1. FC Heidenheim": "89th",
    "Getafe": "90th",
    "RB Leipzig": "91st"
};
const topFlightYearsRankings = {
    "Everton": "1st",
    "Aston Villa": "2nd",
    "Liverpool": "3rd",
    "Arsenal": "4th",
    "Manchester United": "5th",
    "Manchester City": "6th",
    "Newcastle United": "7th",
    "Athletic Bilbao": "8th",
    "Barcelona": "8th",
    "Chelsea": "8th",
    "Real Madrid": "8th",
    "Tottenham Hotspur": "8th",
    "Internazionale": "12th",
    "Juventus": "13th",
    "Roma": "13th",
    "AC Milan": "15th",
    "Wolverhampton Wanderers": "16th",
    "Fiorentina": "17th",
    "Valencia": "18th",
    "West Ham United": "19th",
    "Espanyol": "20th",
    "Atlético Madrid": "20th",
    "Lazio": "22nd",
    "Nottingham Forest": "23rd",
    "Torino": "24th",
    "Sevilla": "25th",
    "Napoli": "26th",
    "Leicester City": "27th",
    "Real Sociedad": "28th",
    "Bologna": "29th",
    "Marseille": "30th",
    "Celta Vigo": "31st",
    "Real Betis": "31st",
    "Bayern Munich": "33rd",
    "Werder Bremen": "33rd",
    "Southampton": "35th",
    "Borussia Dortmund": "36th",
    "VfB Stuttgart": "36th",
    "Borussia Mönchengladbach": "38th",
    "Valladolid": "39th",
    "Eintracht Frankfurt": "40th",
    "Atalanta": "41st",
    "Saint-Étienne": "42nd",
    "Fulham": "43rd",
    "Rennes": "44th",
    "Osasuna": "45th",
    "Lyon": "46th",
    "Monaco": "47th",
    "Nice": "47th",
    "Bayer Leverkusen": "49th",
    "Lille": "50th",
    "Strasbourg": "51st",
    "Ipswich Town": "52nd",
    "Lens": "53rd",
    "Genoa": "54th",
    "Nantes": "55th",
    "Paris Saint-Germain": "56th",
    "Las Palmas": "57th",
    "Crystal Palace": "58th",
    "VfL Bochum": "59th",
    "Udinese": "60th",
    "Montpellier": "61st",
    "Mallorca": "62nd",
    "Reims": "63rd",
    "VfL Wolfsburg": "64th",
    "Toulouse": "65th",
    "Cagliari": "66th",
    "Auxerre": "67th",
    "Angers": "68th",
    "SC Freiburg": "69th",
    "Hellas Verona": "70th",
    "Brighton & Hove Albion": "71st",
    "Villarreal": "72nd",
    "Mainz 05": "73rd",
    "Parma": "74th",
    "Le Havre": "75th",
    "Rayo Vallecano": "76th",
    "TSG Hoffenheim": "77th",
    "Getafe": "78th",
    "Brentford": "79th",
    "Alavés": "80th",
    "Lecce": "81st",
    "FC Augsburg": "82nd",
    "Brest": "83rd",
    "Empoli": "84th",
    "FC St. Pauli": "85th",
    "RB Leipzig": "85th",
    "Bournemouth": "87th",
    "Como": "88th",
    "Venezia": "88th",
    "Girona": "90th",
    "Leganés": "90th",
    "Union Berlin": "92nd",
    "Monza": "93rd",
    "1. FC Heidenheim": "94th",
    "Holstein Kiel": "95th"
};

// Team aliases for easier guessing
const teamAliases = {
    "Manchester United": ["Man Utd", "Man United", "ManU", "United", "Manchester Utd", "MUFC"],
    "Manchester City": ["Man City", "City", "MCFC"],
    "Liverpool": ["Liverpool FC", "LFC", "The Reds"],
    "Arsenal": ["Arsenal FC", "The Gunners", "AFC"],
    "Chelsea": ["Chelsea FC", "The Blues", "CFC"],
    "Tottenham Hotspur": ["Spurs", "Tottenham", "THFC"],
    // Add more team aliases as needed
};

// List of teams and their corresponding logo paths
const teamLogos = [
    // Premier League
    { name: "Manchester United", path: "logos/PL/manutd.png" },
    { name: "Manchester City", path: "logos/PL/mancity.png" },
    { name: "Liverpool", path: "logos/PL/liverpool.png" },
    { name: "Arsenal", path: "logos/PL/arsenal.png" },
    { name: "Chelsea", path: "logos/PL/chelsea.png" },
    { name: "Aston Villa", path: "logos/PL/aston-villa.png" },
    { name: "Bournemouth", path: "logos/PL/bournemouth.png" },
    { name: "Brentford", path: "logos/PL/brentford.png" },
    { name: "Brighton & Hove Albion", path: "logos/PL/brighton.png" },
    { name: "Crystal Palace", path: "logos/PL/crystal-palace.png" },
    { name: "Everton", path: "logos/PL/everton.png" },
    { name: "Nottingham Forest", path: "logos/PL/forest.png" },
    { name: "Fulham", path: "logos/PL/fulham.png" },
    { name: "Ipswich Town", path: "logos/PL/ipswich.png" },
    { name: "Leicester City", path: "logos/PL/leicester.png" },
    { name: "Newcastle United", path: "logos/PL/newcastle.png" },
    { name: "Southampton", path: "logos/PL/southampton.png" },
    { name: "Tottenham Hotspur", path: "logos/PL/spurs.png" },
    { name: "West Ham United", path: "logos/PL/westham.png" },
    { name: "Wolverhampton Wanderers", path: "logos/PL/wolves.png" },

    // La Liga Teams
    { name: "Alavés", path: "logos/LaLiga/alaves.png" },
    { name: "Atlético Madrid", path: "logos/LaLiga/atletico.png" },
    { name: "Barcelona", path: "logos/LaLiga/barcelona.png" },
    { name: "Real Betis", path: "logos/LaLiga/betis.png" },
    { name: "Athletic Bilbao", path: "logos/LaLiga/bilbao.png" },
    { name: "Espanyol", path: "logos/LaLiga/espanyol.png" },
    { name: "Getafe", path: "logos/LaLiga/getafe.png" },
    { name: "Girona", path: "logos/LaLiga/girona.png" },
    { name: "Las Palmas", path: "logos/LaLiga/laspalmas.png" },
    { name: "Leganés", path: "logos/LaLiga/leganes.png" },
    { name: "Mallorca", path: "logos/LaLiga/mallorca.png" },
    { name: "Rayo Vallecano", path: "logos/LaLiga/rayo.png" },
    { name: "Real Madrid", path: "logos/LaLiga/realmadrid.png" },
    { name: "Sevilla", path: "logos/LaLiga/sevilla.png" },
    { name: "Real Sociedad", path: "logos/LaLiga/sociedad.png" },
    { name: "Valencia", path: "logos/LaLiga/valencia.png" },
    { name: "Valladolid", path: "logos/LaLiga/valladolid.png" },
    { name: "Celta Vigo", path: "logos/LaLiga/vigo.png" },
    { name: "Villarreal", path: "logos/LaLiga/villarreal.png" },

    // Bundesliga Teams
    { name: "FC Augsburg", path: "logos/Bundesliga/augsburg.png" },
    { name: "Bayern Munich", path: "logos/Bundesliga/bayern.png" },
    { name: "Vfl Bochum", path: "logos/Bundesliga/bochum.png" },
    { name: "Werder Bremen", path: "logos/Bundesliga/bremen.png" },
    { name: "Borussia Dortmund", path: "logos/Bundesliga/dortmund.png" },
    { name: "Eintracht Frankfurt", path: "logos/Bundesliga/frankfurt.png" },
    { name: "Borussia Mönchengladbach", path: "logos/Bundesliga/gladbach.png" },
    { name: "1. FC Heidenheim", path: "logos/Bundesliga/heidenheim.png" },
    { name: "TSG Hoffenheim", path: "logos/Bundesliga/hoffenheim.png" },
    { name: "Holstein Kiel", path: "logos/Bundesliga/holstein.png" },
    { name: "RB Leipzig", path: "logos/Bundesliga/leipzig.png" },
    { name: "Bayer Leverkusen", path: "logos/Bundesliga/leverkusen.png" },
    { name: "Mainz 05", path: "logos/Bundesliga/mainz.png" },
    { name: "FC St. Pauli", path: "logos/Bundesliga/st-pauli.png" },
    { name: "VfB Stuttgart", path: "logos/Bundesliga/stuttgart.png" },
    { name: "Union Berlin", path: "logos/Bundesliga/union.png" },
    { name: "VfL Wolfsburg", path: "logos/Bundesliga/wolfsburg.png" },

    // Ligue 1 Teams
    { name: "Angers", path: "logos/Ligue1/angers.png" },
    { name: "Saint-Étienne", path: "logos/Ligue1/asse.png" },
    { name: "Auxerre", path: "logos/Ligue1/auxerre.png" },
    { name: "Brest", path: "logos/Ligue1/brest.png" },
    { name: "Le Havre", path: "logos/Ligue1/lehavre.png" },
    { name: "Lens", path: "logos/Ligue1/lens.png" },
    { name: "Lille", path: "logos/Ligue1/lille.png" },
    { name: "Lyon", path: "logos/Ligue1/lyon.png" },
    { name: "Marseille", path: "logos/Ligue1/marseille.png" },
    { name: "Monaco", path: "logos/Ligue1/monaco.png" },
    { name: "Montpellier", path: "logos/Ligue1/montpellier.png" },
    { name: "Nantes", path: "logos/Ligue1/nantes.png" },
    { name: "Nice", path: "logos/Ligue1/nice.png" },
    { name: "Paris Saint-German", path: "logos/Ligue1/psg.png" },
    { name: "Reims", path: "logos/Ligue1/reims.png" },
    { name: "Rennes", path: "logos/Ligue1/rennes.png" },
    { name: "Strasbourg", path: "logos/Ligue1/strasbourg.png" },
    { name: "Toulouse", path: "logos/Ligue1/toulouse.png" },

    // Serie A Teams
    { name: "AC Milan", path: "logos/SerieA/acmilan.png" },
    { name: "Atalanta", path: "logos/SerieA/atalanta.png" },
    { name: "Bologna", path: "logos/SerieA/bologna.png" },
    { name: "Cagliari", path: "logos/SerieA/cagliari.png" },
    { name: "Como", path: "logos/SerieA/como.png" },
    { name: "Empoli", path: "logos/SerieA/empoli.png" },
    { name: "Fiorentina", path: "logos/SerieA/fiorentina.png" },
    { name: "Genoa", path: "logos/SerieA/genoa.png" },
    { name: "Hellas Verona", path: "logos/SerieA/hellasverona.png" },
    { name: "Internazionale", path: "logos/SerieA/intermilan.png" },
    { name: "Juventus", path: "logos/SerieA/juventus.png" },
    { name: "Lazio", path: "logos/SerieA/lazio.png" },
    { name: "Lecce", path: "logos/SerieA/lecce.png" },
    { name: "Monza", path: "logos/SerieA/monza.png" },
    { name: "Napoli", path: "logos/SerieA/napoli.png" },
    { name: "Parma", path: "logos/SerieA/parma.png" },
    { name: "Roma", path: "logos/SerieA/roma.png" },
    { name: "Torino", path: "logos/SerieA/torino.png" },
    { name: "Udinese", path: "logos/SerieA/udinese.png" },
    { name: "Venezia", path: "logos/SerieA/venezia.png" },

    // Add more teams as needed
];

// Preload images
const imagePreloads = teamLogos.map((teamLogo) => {
    const img = new Image();
    img.src = teamLogo.path;
    return img;
});

// Game variables
let selectedBox = null;
let rolledTeamIndices = new Set();
let skipsRemaining = 3; // Start with 3 skips
const MAX_SKIPS = 3;
let currentRoll = null; // Track the current team
let isRolling = false; // Flag to prevent double clicks
let selectedBoxes = new Set(); // Make this global so it's accessible everywhere

function rollFlag() {
    // Prevent multiple rapid clicks
    if (isRolling) return;
    isRolling = true;
    
    const flagBox = document.getElementById('flagBox');
    const countryNameDiv = document.getElementById('countryName');
    const containerDiv = document.querySelector('.container');
    const pickText = document.getElementById('pickText');
    const rollButton = document.querySelector('button');
    const rollDuration = 2000;

    // Check if we're re-rolling and need to count a skip
    if (currentRoll !== null && selectedBox === null) {
        // This is a re-roll, so decrease remaining skips
        skipsRemaining--;
        updateSkipsCounter();
        
        // If we've used all skips, disable the button AFTER this roll
        if (skipsRemaining <= 0) {
            // We'll disable the button after the animation completes
            // This allows the last roll to happen
        }
    }

    containerDiv.classList.remove('roll-ended');
    pickText.style.visibility = 'hidden';
    selectedBox = null;

    let startTime = null;

    function animateFlag(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / rollDuration, 1);

        // Filter available team indices
        const availableTeamIndices = teamLogos
            .map((_, index) => index)
            .filter(index => !rolledTeamIndices.has(index));
        
        // Select a random index from available indices
        const randomIndex = Math.floor(Math.random() * availableTeamIndices.length);
        const randomTeamIndex = availableTeamIndices[randomIndex];

        // Set the team logo and name
        flagBox.style.backgroundImage = `url(${teamLogos[randomTeamIndex].path})`;
        countryNameDiv.textContent = teamLogos[randomTeamIndex].name;

        if (percentage < 1) {
            requestAnimationFrame(animateFlag);
        } else {
            startTime = null;
            containerDiv.classList.add('roll-ended');
            pickText.style.visibility = 'visible';
            rolledTeamIndices.add(randomTeamIndex); // Add the rolled team index to the set
            
            // Save the current roll
            currentRoll = randomTeamIndex;
            
            // Change button text to "Re-roll" if skips are available
            if (skipsRemaining > 0) {
                rollButton.textContent = 'Re-roll';
            } else {
                // Disable the button AFTER the final roll completes
                rollButton.disabled = true;
                rollButton.style.opacity = '0.5';
                rollButton.style.cursor = 'not-allowed';
            }
            
            // Allow rolling again
            isRolling = false;
        }
    }

    requestAnimationFrame(animateFlag);
}

document.addEventListener('DOMContentLoaded', function () {
    // Create skips counter display
    const flagContainer = document.querySelector('.flag-container');
    const skipsCounter = document.createElement('div');
    skipsCounter.id = 'skipsCounter';
    skipsCounter.className = 'skips-counter';
    skipsCounter.textContent = `Skips: ${skipsRemaining}/${MAX_SKIPS}`;
    
    // Insert after the roll button
    const rollButton = document.querySelector('button');
    rollButton.parentNode.insertBefore(skipsCounter, rollButton.nextSibling);

    // Create high score display
    const highScoreDisplay = document.createElement('div');
    highScoreDisplay.id = 'highScoreDisplay';
    highScoreDisplay.className = 'high-score';
    highScoreDisplay.textContent = `High Score: ${getHighScore() || 'None'}`;
    
    // Add high score at the bottom of the page
    const container = document.querySelector('.container');
    container.appendChild(highScoreDisplay);

    const categoryBoxes = document.querySelectorAll('.category-box');
    const trophiesBox = document.getElementById('trophiesBox');
    const trophiesRank = document.getElementById('trophiesRank');
    const squadAgeBox = document.getElementById('squadAgeBox');
    const squadAgeRank = document.getElementById('squadAgeRank');
    const marketValueBox = document.getElementById('marketValueBox');
    const marketValueRank = document.getElementById('marketValueRank');
    const stadiumCapacityBox = document.getElementById('stadiumCapacityBox');
    const stadiumCapacityRank = document.getElementById('stadiumCapacityRank');
    const homegrownBox = document.getElementById('homegrownBox');
    const homegrownRank = document.getElementById('homegrownRank');
    const foreignPlayersBox = document.getElementById('foreignPlayersBox');
    const foreignPlayersRank = document.getElementById('foreignPlayersRank');
    const clubAgeBox = document.getElementById('clubAgeBox');
    const clubAgeRank = document.getElementById('clubAgeRank');
    const topFlightYearsBox = document.getElementById('topFlightYearsBox');
    const topFlightYearsRank = document.getElementById('topFlightYearsRank');
    
    const averageRankingText = document.getElementById('averageRankingText');

    rollButton.addEventListener('click', function () {
        if (selectedBoxes.size === categoryBoxes.length) {
            resetGame();
        } else {
            // Always allow rolling, the rollFlag function will handle skips
            rollFlag();
        }
    });

    categoryBoxes.forEach(box => {
        box.addEventListener('click', function () {
            // Only allow clicking if we're not in the middle of rolling
            if (!isRolling && !selectedBoxes.has(box) && currentRoll !== null) {
                selectedBox = box;
                const flagUrl = document.getElementById('flagBox').style.backgroundImage;
                box.style.background = `${flagUrl} center/cover no-repeat`;
                selectedBoxes.add(box);

                const teamName = document.getElementById('countryName').textContent;
                if (box.parentElement.id === 'trophiesBox') {
                    trophiesRank.textContent = trophiesRankings[teamName] || "No data available";
                    colorizeRank(trophiesRank);
                } else if (box.parentElement.id === 'squadAgeBox') {
                    squadAgeRank.textContent = squadAgeRankings[teamName] || "No data available";
                    colorizeRank(squadAgeRank);
                } else if (box.parentElement.id === 'marketValueBox') {
                    marketValueRank.textContent = marketValueRankings[teamName] || "No data available";
                    colorizeRank(marketValueRank);
                } else if (box.parentElement.id === 'stadiumCapacityBox') {
                    stadiumCapacityRank.textContent = stadiumCapacityRankings[teamName] || "No data available";
                    colorizeRank(stadiumCapacityRank);
                } else if (box.parentElement.id === 'homegrownBox') {
                    homegrownRank.textContent = homegrownRankings[teamName] || "No data available";
                    colorizeRank(homegrownRank);
                } else if (box.parentElement.id === 'foreignPlayersBox') {
                    foreignPlayersRank.textContent = foreignPlayersRankings[teamName] || "No data available";
                    colorizeRank(foreignPlayersRank);
                } else if (box.parentElement.id === 'clubAgeBox') {
                    clubAgeRank.textContent = clubAgeRankings[teamName] || "No data available";
                    colorizeRank(clubAgeRank);
                } else if (box.parentElement.id === 'topFlightYearsBox') {
                    topFlightYearsRank.textContent = topFlightYearsRankings[teamName] || "No data available";
                    colorizeRank(topFlightYearsRank);
                }

                // Reset the roll button to "Roll" after placing a team
                rollButton.textContent = 'Roll';
                rollButton.disabled = false;
                rollButton.style.opacity = '1';
                rollButton.style.cursor = 'pointer';
                currentRoll = null;

                if (selectedBoxes.size === categoryBoxes.length) {
                    rollButton.textContent = 'Reset';
                    displayAverageRanking();
                }
            }
        });
    });

    function colorizeRank(rankElement) {
        if (rankElement.textContent.includes("No data")) return;
        
        // Extract the number from the rank (e.g., "1st" -> 1)
        const rankNum = parseInt(rankElement.textContent);
        
        if (rankNum <= 15) {
            rankElement.style.color = '#008000'; // Green for good rankings
        } else if (rankNum <= 35) {
            rankElement.style.color = '#FFA500'; // Orange for medium rankings
        } else {
            rankElement.style.color = '#FF0000'; // Red for poor rankings
        }
    }

    function getHighScore() {
        return localStorage.getItem('footballLogoGameHighScore');
    }

    function setHighScore(score) {
        localStorage.setItem('footballLogoGameHighScore', score);
        highScoreDisplay.textContent = `High Score: ${score}`;
    }

    function displayAverageRanking() {
        const ranks = [
            extractNumberFromRank(trophiesRank.textContent),
            extractNumberFromRank(squadAgeRank.textContent),
            extractNumberFromRank(marketValueRank.textContent),
            extractNumberFromRank(stadiumCapacityRank.textContent),
            extractNumberFromRank(homegrownRank.textContent),
            extractNumberFromRank(foreignPlayersRank.textContent),
            extractNumberFromRank(clubAgeRank.textContent),
            extractNumberFromRank(topFlightYearsRank.textContent)
        ];

        const validRanks = ranks.filter(rank => rank > 0);
        const averageRanking = validRanks.reduce((sum, rank) => sum + rank, 0) / validRanks.length;
        const formattedAverage = averageRanking.toFixed(2);

        averageRankingText.textContent = `Average Ranking: ${formattedAverage}`;
        
        // Check if this is a new high score (lower is better)
        const currentHighScore = getHighScore();
        
        if (!currentHighScore || parseFloat(formattedAverage) < parseFloat(currentHighScore)) {
            setHighScore(formattedAverage);
            
            // Create and display "New High Score!" message
            const newHighScoreMsg = document.createElement('div');
            newHighScoreMsg.textContent = "New High Score!";
            newHighScoreMsg.className = "new-high-score";
            
            averageRankingText.appendChild(document.createElement('br'));
            averageRankingText.appendChild(newHighScoreMsg);
        }
    }

    function extractNumberFromRank(rankText) {
        if (rankText.includes("No data")) return 0;
        // Extract the number from strings like "1st", "2nd", "3rd", "4th"
        return parseInt(rankText);
    }

    function resetGame() {
        selectedBoxes.clear();
        selectedBox = null;
        rolledTeamIndices.clear(); // Clear the set of rolled team indices
        skipsRemaining = MAX_SKIPS; // Reset to max skips
        currentRoll = null;
        isRolling = false;
        updateSkipsCounter();

        rollButton.textContent = 'Roll';
        rollButton.disabled = false;
        rollButton.style.opacity = '1';
        rollButton.style.cursor = 'pointer';

        categoryBoxes.forEach(box => {
            box.style.background = 'none';
        });
        
        // Reset all rank displays
        const rankElements = document.querySelectorAll('.rank');
        rankElements.forEach(element => {
            element.textContent = '';
            element.style.color = '#333'; // Reset color
        });
        
        averageRankingText.textContent = '';
    }
    
    // Make resetGame globally accessible
    window.resetGame = resetGame;
});

// Helper function to extract number from rank strings
function extractNumberFromRank(rankText) {
    if (!rankText || rankText.includes("No data")) return 0;
    return parseInt(rankText);
}

function updateSkipsCounter() {
    const skipsCounter = document.getElementById('skipsCounter');
    if (skipsCounter) {
        skipsCounter.textContent = `Skips: ${skipsRemaining}/${MAX_SKIPS}`;
    }
}

// Game mode management
let currentGameMode = 'classic'; // Default game mode

document.addEventListener('DOMContentLoaded', function() {
    // Get game mode elements
    const changeModeTab = document.getElementById('changeModeTab');
    const gameModeDropdown = document.getElementById('gameModeDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const classicContainer = document.querySelector('.container');
    const duelContainer = document.getElementById('flagDuelContainer');
    
    // Initialize game containers
    classicContainer.classList.add('active');
    
    // Add click handlers for game mode selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the dropdown from closing immediately
            
            const mode = this.getAttribute('data-mode');
            if (mode === currentGameMode) return; // No change needed
            
            // Update selection visual
            dropdownItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            
            // Hide dropdown after selection
            gameModeDropdown.classList.add('hidden');
            
            // Add a small timeout to hide dropdown, making it feel more natural
            setTimeout(() => {
                gameModeDropdown.classList.remove('hidden');
            }, 300);
            
            // Switch game mode
            switchGameMode(mode);
        });
    });
    
    // Add a click handler to the document to hide dropdown when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (!changeModeTab.contains(e.target)) {
            gameModeDropdown.classList.add('hidden');
            setTimeout(() => {
                gameModeDropdown.classList.remove('hidden');
            }, 300);
        }
    });
    
    // Function to switch between game modes
    function switchGameMode(mode) {
        currentGameMode = mode;
        
        // Hide all game containers
        classicContainer.classList.remove('active');
        duelContainer.classList.remove('active');
        const revealContainer = document.getElementById('flagRevealContainer');
        const puzzleContainer = document.getElementById('flagPuzzleContainer');
        
        if (revealContainer) {
            revealContainer.classList.remove('active');
            revealContainer.style.display = 'none';
        }
        
        if (puzzleContainer) {
            puzzleContainer.classList.remove('active');
            puzzleContainer.style.display = 'none';
        }
        
        // Show the selected game container
        if (mode === 'classic') {
            classicContainer.classList.add('active');
            classicContainer.style.display = 'block';
            // Reset the classic game if needed
            if (typeof resetGame === 'function') {
                resetGame();
            }
        } else if (mode === 'duel') {
            duelContainer.classList.add('active');
            duelContainer.style.display = 'block';
            // Initialize the duel game
            if (typeof initFlagDuel === 'function') {
                initFlagDuel();
            }
        } else if (mode === 'reveal' && revealContainer) {
            revealContainer.classList.add('active');
            revealContainer.style.display = 'block';
            // Initialize the reveal game
            if (typeof initFlagReveal === 'function') {
                initFlagReveal();
            }
        } else if (mode === 'puzzle' && puzzleContainer) {
            puzzleContainer.classList.add('active');
            puzzleContainer.style.display = 'block';
            // Initialize the puzzle game
            if (typeof initFlagPuzzle === 'function') {
                initFlagPuzzle();
            }
        }
    }
});

// ================= Football Logo Duel Game Mode =================

// Duel mode variables
let currentScore = 0;
let duelHighScore = 0;
let leftTeam, rightTeam;
let currentCategory;
let answeredCorrectly = false;
let categories = [
    { name: "Trophies", rankings: trophiesRankings },
    { name: "Average Squad Age", rankings: squadAgeRankings, lowerIsBetter: true },
    { name: "Club Market Value", rankings: marketValueRankings },
    { name: "Stadium Capacity", rankings: stadiumCapacityRankings },
    { name: "Homegrown Players", rankings: homegrownRankings },
    { name: "Foreign Players", rankings: foreignPlayersRankings },
    { name: "Age of Club", rankings: clubAgeRankings },
    { name: "Years in Top Flight", rankings: topFlightYearsRankings }
];

// Function to load high score from localStorage
function getDuelHighScore() {
    return localStorage.getItem('footballLogoDuelHighScore') || 0;
}

// Function to save high score to localStorage
function setDuelHighScore(score) {
    localStorage.setItem('footballLogoDuelHighScore', score);
    document.getElementById('duelHighScore').textContent = `High Score: ${score}`;
}

// Function to display the new high score message
function displayNewHighScoreMessage() {
    // Remove existing message if there is one
    const existingMessage = document.querySelector('.new-high-score-duel');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const newHighScoreMsg = document.createElement('div');
    newHighScoreMsg.textContent = "New High Score!";
    newHighScoreMsg.className = "new-high-score-duel";
    
    // Add to the message container
    const messageContainer = document.querySelector('.duel-high-score-message-container');
    if (messageContainer) {
        messageContainer.appendChild(newHighScoreMsg);
    }
}

// Function to initialize Football Logo Duel game
function initFlagDuel() {
    console.log('Logo Duel mode initialized');
    
    // Get DOM elements
    const leftFlag = document.getElementById('leftFlag');
    const rightFlag = document.getElementById('rightFlag');
    const leftTeamName = document.getElementById('leftCountryName');
    const rightTeamName = document.getElementById('rightCountryName');
    const categoryNameSpan = document.getElementById('categoryName');
    const duelScoreDisplay = document.getElementById('duelScore');
    const duelHighScoreDisplay = document.getElementById('duelHighScore');
    const nextDuelButton = document.getElementById('nextDuelButton');
    
    // Reset score and get high score
    currentScore = 0;
    duelHighScore = getDuelHighScore();
    duelScoreDisplay.textContent = `Score: ${currentScore}`;
    duelHighScoreDisplay.textContent = `High Score: ${duelHighScore}`;
    
    // Set up click handlers for logos
    leftFlag.addEventListener('click', () => handleFlagClick('left'));
    rightFlag.addEventListener('click', () => handleFlagClick('right'));
    
    // Set up next button
    nextDuelButton.addEventListener('click', setupNewDuel);
    nextDuelButton.style.display = 'none';
    
    // Start the first duel
    setupNewDuel();
}

// Function to set up a new duel
function setupNewDuel() {
    // Reset flags
    const leftFlag = document.getElementById('leftFlag');
    const rightFlag = document.getElementById('rightFlag');
    leftFlag.classList.remove('correct', 'incorrect');
    rightFlag.classList.remove('correct', 'incorrect');
    
    // Hide next button
    const nextDuelButton = document.getElementById('nextDuelButton');
    nextDuelButton.style.display = 'none';
    
    // Clear any existing high score message
    const highScoreMessage = document.querySelector('.new-high-score-duel');
    if (highScoreMessage) {
        highScoreMessage.remove();
    }
    
    // Select two different random teams
    const availableTeams = teamLogos.filter(team => {
        // Filter to only include teams that have data for all categories
        return categories.every(category => 
            category.rankings[team.name] !== undefined
        );
    });
    
    if (availableTeams.length < 2) {
        alert("Not enough teams with complete data for all categories.");
        return;
    }
    
    // Pick two random teams
    const team1Index = Math.floor(Math.random() * availableTeams.length);
    let team2Index;
    do {
        team2Index = Math.floor(Math.random() * availableTeams.length);
    } while (team1Index === team2Index);
    
    leftTeam = availableTeams[team1Index].name;
    rightTeam = availableTeams[team2Index].name;
    
    // Get logo URLs
    const leftTeamLogo = availableTeams[team1Index].path;
    const rightTeamLogo = availableTeams[team2Index].path;
    
    // Display logos and team names
    leftFlag.style.backgroundImage = `url(${leftTeamLogo})`;
    rightFlag.style.backgroundImage = `url(${rightTeamLogo})`;
    document.getElementById('leftCountryName').textContent = leftTeam;
    document.getElementById('rightCountryName').textContent = rightTeam;
    
    // Select random category
    const categoryIndex = Math.floor(Math.random() * categories.length);
    currentCategory = categories[categoryIndex];
    document.getElementById('categoryName').textContent = currentCategory.name;
    
    // Reset answered flag
    answeredCorrectly = false;
}

// Function to handle flag click
function handleFlagClick(side) {
    // Ignore clicks if already answered
    if (document.getElementById('nextDuelButton').style.display !== 'none') {
        return;
    }
    
    const leftFlag = document.getElementById('leftFlag');
    const rightFlag = document.getElementById('rightFlag');
    
    // Get rankings
    const leftRanking = extractNumberFromRank(currentCategory.rankings[leftTeam]);
    const rightRanking = extractNumberFromRank(currentCategory.rankings[rightTeam]);
    
    // Determine correct answer based on whether lower is better
    let correctSide;
    if (currentCategory.lowerIsBetter) {
        // For categories where lower rank is better (like Average Squad Age)
        correctSide = leftRanking < rightRanking ? 'left' : 'right';
    } else {
        // For categories where higher rank is better (default)
        correctSide = leftRanking < rightRanking ? 'left' : 'right';
    }
    
    // Handle correctness
    if (side === correctSide) {
        // Correct answer
        if (side === 'left') {
            leftFlag.classList.add('correct');
            rightFlag.classList.add('incorrect');
        } else {
            rightFlag.classList.add('correct');
            leftFlag.classList.add('incorrect');
        }
        
        // Increment score
        currentScore++;
        document.getElementById('duelScore').textContent = `Score: ${currentScore}`;
        
        // Check for new high score
        if (currentScore > duelHighScore) {
            duelHighScore = currentScore;
            setDuelHighScore(duelHighScore);
            
            // Add high score celebration
            displayNewHighScoreMessage();
        }
        
        answeredCorrectly = true;
    } else {
        // Incorrect answer
        if (side === 'left') {
            leftFlag.classList.add('incorrect');
            rightFlag.classList.add('correct');
        } else {
            rightFlag.classList.add('incorrect');
            leftFlag.classList.add('correct');
        }
        
        // Game over - reset score
        answeredCorrectly = false;
    }
    
    // Show next button
    const nextDuelButton = document.getElementById('nextDuelButton');
    nextDuelButton.style.display = 'inline-block';
    
    // If incorrect, change button text to "Try Again"
    nextDuelButton.textContent = answeredCorrectly ? "Next Duel" : "Try Again";
    
    // If incorrect, reset score on next attempt
    if (!answeredCorrectly) {
        nextDuelButton.addEventListener('click', function resetScore() {
            currentScore = 0;
            document.getElementById('duelScore').textContent = `Score: ${currentScore}`;
            
            // Hide high score message if visible
            const highScoreMessage = document.querySelector('.new-high-score-duel');
            if (highScoreMessage) {
                highScoreMessage.remove();
            }
            
            nextDuelButton.removeEventListener('click', resetScore);
        }, { once: true });
    }
}

// Expose the initFlagDuel function globally
window.initFlagDuel = initFlagDuel;

// ================= Football Logo Reveal Game Mode =================

// Logo Reveal variables
let revealScore = 0;
let revealHighScore = 0;
let currentRevealTeam = null;
let revealLives = 3;
let totalPieces = 16; // 4x4 grid
let revealedPieces = 0;
let revealTimer = null;
let revealInterval = 1500; // Time in ms between piece reveals (1.5 seconds)
let isGameActive = false;
let currentDifficulty = 'medium'; // 'easy', 'medium', 'hard'
let scoreMultiplier = 1;

// Function to check team name guess considering aliases
function checkTeamGuess(userGuess, correctTeam) {
    // Normalize the user guess (lowercase, remove extra spaces)
    const normalizedGuess = userGuess.toLowerCase().trim();
    
    // Check against official name
    if (correctTeam.toLowerCase() === normalizedGuess) {
        return true;
    }
    
    // Check against aliases
    const aliases = teamAliases[correctTeam] || [];
    return aliases.some(alias => alias.toLowerCase() === normalizedGuess);
}

// Function to load high score from localStorage
function getRevealHighScore() {
    return localStorage.getItem('footballLogoRevealHighScore') || 0;
}

// Function to save high score to localStorage
function setRevealHighScore(score) {
    localStorage.setItem('footballLogoRevealHighScore', score);
    document.getElementById('revealHighScore').textContent = score;
}

// Function to initialize Football Logo Reveal game
function initFlagReveal() {
    console.log('Logo Reveal mode initialized');
    
    // Get DOM elements
    const revealFlag = document.getElementById('revealFlag');
    const puzzleGrid = document.getElementById('puzzleGrid');
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');
    const nextRevealButton = document.getElementById('nextRevealButton');
    const revealMessage = document.getElementById('revealMessage');
    
    // Reset score and get high score
    revealScore = 0;
    revealHighScore = getRevealHighScore();
    document.getElementById('revealScore').textContent = revealScore;
    document.getElementById('revealHighScore').textContent = revealHighScore;
    
    // Reset lives
    revealLives = 3;
    document.getElementById('revealLives').textContent = revealLives;
    
    // Set up event listeners
    submitGuessButton.addEventListener('click', handleGuessSubmit);
    countryGuessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleGuessSubmit();
        }
    });
    
    // Hide the "Next Logo" button as we won't be using it except for game over
    nextRevealButton.style.display = 'none';
    nextRevealButton.addEventListener('click', function() {
        // Reset the game
        revealScore = 0;
        document.getElementById('revealScore').textContent = revealScore;
        revealLives = 3;
        document.getElementById('revealLives').textContent = revealLives;
        
        // Remove any high score message
        const highScoreMessage = document.querySelector('.reveal-high-score-message');
        if (highScoreMessage) {
            highScoreMessage.remove();
        }
        
        // Start a new round
        setupNewReveal();
    });
    
    // Start the first round
    setupNewReveal();
    
    // Focus on the input box for quick entry
    setTimeout(() => {
        countryGuessInput.focus();
    }, 500);
}

// Function to set up a new logo reveal round
function setupNewReveal() {
    // Reset UI elements
    const revealFlag = document.getElementById('revealFlag');
    const puzzleGrid = document.getElementById('puzzleGrid');
    const revealMessage = document.getElementById('revealMessage');
    const nextRevealButton = document.getElementById('nextRevealButton');
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');
    
    // Hide the logo initially
    revealFlag.style.visibility = 'hidden';
    
    revealMessage.textContent = '';
    revealMessage.className = 'reveal-message';
    nextRevealButton.style.display = 'none';
    countryGuessInput.value = '';
    countryGuessInput.disabled = false;
    submitGuessButton.disabled = false;
    
    // First create the puzzle pieces
    puzzleGrid.innerHTML = '';
    
    for (let i = 0; i < totalPieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.dataset.index = i;
        puzzleGrid.appendChild(piece);
    }
    
    // Reset revealed pieces counter
    revealedPieces = 0;
    document.getElementById('revealProgress').textContent = revealedPieces;
    
    // Select a random team
    const availableTeams = teamLogos.filter(team => {
        // Ensure the team has a logo path
        return team.path;
    });
    
    if (availableTeams.length === 0) {
        alert("No teams with logos available.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableTeams.length);
    currentRevealTeam = availableTeams[randomIndex].name;
    
    // Wait a very short time to ensure all pieces are rendered before showing the logo
    setTimeout(() => {
        // Set the logo image
        const logoUrl = availableTeams[randomIndex].path;
        revealFlag.style.backgroundImage = `url(${logoUrl})`;
        revealFlag.style.visibility = 'visible'; // Make logo visible only after pieces are ready
        
        // Start revealing pieces
        isGameActive = true;
        if (revealTimer) {
            clearInterval(revealTimer);
        }
        startRevealTimer();
        
        // Focus on the input box for quick entry
        countryGuessInput.focus();
    }, 50); // 50ms delay should be enough
}

// Function to start the reveal timer
function startRevealTimer() {
    // Clear any existing timer
    if (revealTimer) {
        clearInterval(revealTimer);
    }
    
    // Set the interval based on difficulty
    switch (currentDifficulty) {
        case 'easy':
            revealInterval = 1200; // 1.2 seconds
            scoreMultiplier = 0.75;
            break;
        case 'medium':
            revealInterval = 1500; // 1.5 seconds
            scoreMultiplier = 1;
            break;
        case 'hard':
            revealInterval = 2000; // 2 seconds
            scoreMultiplier = 1.5;
            break;
    }
    
    // Start new timer
    revealTimer = setInterval(revealRandomPiece, revealInterval);
}

// Function to reveal a random puzzle piece
function revealRandomPiece() {
    if (!isGameActive) return;
    
    const puzzlePieces = document.querySelectorAll('.puzzle-piece:not(.revealed)');
    
    if (puzzlePieces.length === 0 || revealedPieces >= totalPieces) {
        // All pieces revealed, end the game
        clearInterval(revealTimer);
        return;
    }
    
    // Select a random piece to reveal
    const randomIndex = Math.floor(Math.random() * puzzlePieces.length);
    const pieceToReveal = puzzlePieces[randomIndex];
    
    // Reveal the piece
    pieceToReveal.classList.add('revealed');
    revealedPieces++;
    
    // Update progress
    document.getElementById('revealProgress').textContent = revealedPieces;
    
    // If all pieces revealed, show the answer after a brief delay
    if (revealedPieces >= totalPieces) {
        setTimeout(() => {
            if (isGameActive) {
                handleOutOfTime();
            }
        }, 1000);
    }
}

// Function to handle guess submission
function handleGuessSubmit() {
    if (!isGameActive) return;
    
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submittedGuess = countryGuessInput.value.trim();
    
    // Stop the timer
    clearInterval(revealTimer);
    
    if (checkTeamGuess(submittedGuess, currentRevealTeam)) {
        // Correct answer
        handleCorrectGuess();
    } else {
        // Incorrect answer
        handleIncorrectGuess();
    }
}

// Function to handle correct guess - with much shorter delay
function handleCorrectGuess() {
    isGameActive = false;
    
    const revealMessage = document.getElementById('revealMessage');
    const countryGuessInput = document.getElementById('countryGuessInput');
    
    // Calculate score based on pieces revealed
    const scoreGain = Math.round(100 * (1 - revealedPieces / totalPieces) * scoreMultiplier);
    revealScore += scoreGain;
    
    // Update UI
    revealMessage.textContent = `Correct! +${scoreGain} points`;
    revealMessage.className = 'reveal-message correct';
    document.getElementById('revealScore').textContent = revealScore;
    
    // Reveal all pieces
    const puzzlePieces = document.querySelectorAll('.puzzle-piece:not(.revealed)');
    puzzlePieces.forEach(piece => {
        piece.classList.add('revealed');
    });
    
    // Check for new high score
    if (revealScore > revealHighScore) {
        revealHighScore = revealScore;
        setRevealHighScore(revealHighScore);
        
        // Display high score message
        displayRevealHighScoreMessage();
    }
    
    // Wait just a very short moment to show the correct answer, then go to next flag
    setTimeout(() => {
        // Clear any high score message
        const highScoreMessage = document.querySelector('.reveal-high-score-message');
        if (highScoreMessage) {
            highScoreMessage.remove();
        }
        
        // Clear the message
        revealMessage.textContent = '';
        revealMessage.className = 'reveal-message';
        
        // Set up a new round
        setupNewReveal();
        
        // Focus on the input box for quick entry
        countryGuessInput.focus();
    }, 1000); // 1 second delay - quick transition
}

// Function to handle incorrect guess
function handleIncorrectGuess() {
    // Decrease lives
    revealLives--;
    document.getElementById('revealLives').textContent = revealLives;
    
    const revealMessage = document.getElementById('revealMessage');
    const countryGuessInput = document.getElementById('countryGuessInput');
    
    if (revealLives <= 0) {
        // Game over
        handleGameOver();
    } else {
        // Still have lives left
        revealMessage.textContent = `Incorrect. ${revealLives} attempts left.`;
        revealMessage.className = 'reveal-message incorrect';
        
        // Continue revealing pieces
        startRevealTimer();
        
        // Clear the input field
        countryGuessInput.value = '';
        
        // Focus on the input box for quick entry
        countryGuessInput.focus();
    }
}

// Function to handle running out of time - with shorter delay
function handleOutOfTime() {
    isGameActive = false;
    
    const revealMessage = document.getElementById('revealMessage');
    const countryGuessInput = document.getElementById('countryGuessInput');
    
    // Update UI
    revealMessage.textContent = `Time's up! The team was ${currentRevealTeam}.`;
    revealMessage.className = 'reveal-message incorrect';
    
    // Decrease lives
    revealLives--;
    document.getElementById('revealLives').textContent = revealLives;
    
    if (revealLives <= 0) {
        // Game over
        handleGameOver();
    } else {
        // Still have lives, automatically go to next flag after a shorter delay
        setTimeout(() => {
            setupNewReveal();
            
            // Focus on the input box for quick entry
            countryGuessInput.focus();
        }, 1500); // 1.5 second - short but enough to read the message
    }
}

// Function to handle game over
function handleGameOver() {
    isGameActive = false;
    
    const revealMessage = document.getElementById('revealMessage');
    const nextRevealButton = document.getElementById('nextRevealButton');
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');
    
    // Update UI
    revealMessage.textContent = `Game Over! The team was ${currentRevealTeam}. Final score: ${revealScore}`;
    revealMessage.className = 'reveal-message incorrect';
    
    // Disable input
    countryGuessInput.disabled = true;
    submitGuessButton.disabled = true;
    
    // Show retry button
    nextRevealButton.style.display = 'inline-block';
    nextRevealButton.textContent = 'Play Again';
    
    // Add event to reset the game on next button click
    nextRevealButton.addEventListener('click', function resetGame() {
        revealScore = 0;
        document.getElementById('revealScore').textContent = revealScore;
        revealLives = 3;
        document.getElementById('revealLives').textContent = revealLives;
        
        // Remove any high score message
        const highScoreMessage = document.querySelector('.reveal-high-score-message');
        if (highScoreMessage) {
            highScoreMessage.remove();
        }
        
        nextRevealButton.removeEventListener('click', resetGame);
    }, { once: true });
}

// Function to display high score message
function displayRevealHighScoreMessage() {
    // Remove existing message if there is one
    const existingMessage = document.querySelector('.reveal-high-score-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const newHighScoreMsg = document.createElement('div');
    newHighScoreMsg.textContent = "New High Score!";
    newHighScoreMsg.className = "reveal-high-score-message";
    
    // Add to the message container
    const messageContainer = document.getElementById('revealMessage').parentNode;
    messageContainer.insertBefore(newHighScoreMsg, document.getElementById('nextRevealButton'));
}

// Expose the initFlagReveal function globally
window.initFlagReveal = initFlagReveal;

// ================= Football Logo Puzzle Guesser Game Mode =================

// Logo Puzzle variables
let puzzleScore = 0;
let puzzleHighScore = 0;
let puzzleTimer = null;
let puzzleTimeRemaining = 120; // 2 minutes in seconds
let puzzleIsActive = false;
let mergedLogos = [];
let guessedTeams = new Set();
let puzzleDifficulty = 2; // Default number of logos to merge

// Function to load high score from localStorage
function getPuzzleHighScore() {
    return localStorage.getItem('footballLogoPuzzleHighScore') || 0;
}

// Function to save high score to localStorage
function setPuzzleHighScore(score) {
    localStorage.setItem('footballLogoPuzzleHighScore', score);
    document.getElementById('puzzleHighScore').textContent = score;
}

// Function to initialize Football Logo Puzzle game
function initFlagPuzzle() {
    console.log('Logo Puzzle mode initialized');
    
    // Get DOM elements
    const puzzleContainer = document.getElementById('flagPuzzleContainer');
    const mergedFlagDiv = document.getElementById('puzzleMergedFlag');
    const countryInput = document.getElementById('countryPuzzleInput');
    const submitButton = document.getElementById('submitPuzzleButton');
    const startButton = document.getElementById('startPuzzleButton');
    const restartButton = document.getElementById('restartPuzzleButton');
    const puzzleMessage = document.getElementById('puzzleMessage');
    const totalFlagsSpan = document.getElementById('totalFlags');
    
    // Reset score and get high score
    puzzleScore = 0;
    puzzleHighScore = getPuzzleHighScore();
    document.getElementById('puzzleScore').textContent = puzzleScore;
    document.getElementById('puzzleHighScore').textContent = puzzleHighScore;
    
    // Initialize flags count display
    totalFlagsSpan.textContent = puzzleDifficulty;
    document.getElementById('flagsIdentified').textContent = 0;
    
    // Remove any existing event listeners (to prevent duplicates)
    const newStartButton = startButton.cloneNode(true);
    const newRestartButton = restartButton.cloneNode(true);
    const newSubmitButton = submitButton.cloneNode(true);
    const newCountryInput = countryInput.cloneNode(true);
    
    startButton.parentNode.replaceChild(newStartButton, startButton);
    restartButton.parentNode.replaceChild(newRestartButton, restartButton);
    submitButton.parentNode.replaceChild(newSubmitButton, submitButton);
    countryInput.parentNode.replaceChild(newCountryInput, countryInput);
    
    // Re-assign the elements after replacing
    const updatedStartButton = document.getElementById('startPuzzleButton');
    const updatedRestartButton = document.getElementById('restartPuzzleButton');
    const updatedSubmitButton = document.getElementById('submitPuzzleButton');
    const updatedCountryInput = document.getElementById('countryPuzzleInput');
    
    // Set up event listeners
    updatedSubmitButton.addEventListener('click', handlePuzzleGuess);
    updatedCountryInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handlePuzzleGuess();
        }
    });
    
    // Add the start game functionality
    updatedStartButton.addEventListener('click', startPuzzleGame);
    updatedRestartButton.addEventListener('click', restartPuzzleGame);
    
    // Initialize UI
    puzzleMessage.textContent = 'Try to identify the merged logos! Click Start to begin.';
    puzzleMessage.className = 'puzzle-message';
    updatedStartButton.style.display = 'block';
    updatedRestartButton.style.display = 'none';
    updatedCountryInput.disabled = true;
    updatedSubmitButton.disabled = true;
}
// Function to start a new game
function startPuzzleGame() {
    // Reset game state
    puzzleScore = 0;
    document.getElementById('puzzleScore').textContent = puzzleScore;
    document.getElementById('flagsIdentified').textContent = 0;
    guessedTeams.clear();
    document.getElementById('guessedFlags').innerHTML = '';
    
    // Enable input and skip button
    document.getElementById('countryPuzzleInput').disabled = false;
    document.getElementById('submitPuzzleButton').disabled = false;
    document.getElementById('skipPuzzleButton').disabled = false;
    
    // Update buttons
    document.getElementById('startPuzzleButton').style.display = 'none';
    document.getElementById('restartPuzzleButton').style.display = 'none';
    
    // Clear any existing message
    document.getElementById('puzzleMessage').textContent = '';
    document.getElementById('puzzleMessage').className = 'puzzle-message';
    
    // Set up timer
    puzzleTimeRemaining = 120; // 2 minutes
    updatePuzzleTimer();
    if (puzzleTimer) {
        clearInterval(puzzleTimer);
    }
    puzzleTimer = setInterval(updatePuzzleTimer, 1000);
    
    // Start game
    puzzleIsActive = true;
    createNewPuzzle();
    
    // Focus the input field
    document.getElementById('countryPuzzleInput').focus();
}

// Function to restart the game
function restartPuzzleGame() {
    // Hide restart button and show start button
    document.getElementById('restartPuzzleButton').style.display = 'none';
    document.getElementById('startPuzzleButton').style.display = 'block';
    
    // Clear any previous high score message
    const highScoreMessage = document.querySelector('.puzzle-high-score-message');
    if (highScoreMessage) {
        highScoreMessage.remove();
    }
    
    // Reset UI
    document.getElementById('puzzleMessage').textContent = 'Try to identify the merged logos! Click Start to begin.';
    document.getElementById('countryPuzzleInput').value = '';
    document.getElementById('guessedFlags').innerHTML = '';
    
    // If there's a game over overlay, remove it
    const gameOverOverlay = document.querySelector('.game-over-overlay');
    if (gameOverOverlay) {
        gameOverOverlay.remove();
    }
}

// Function to update the timer
function updatePuzzleTimer() {
    if (!puzzleIsActive) return;
    
    // Decrease time
    puzzleTimeRemaining--;
    
    // Format time as M:SS
    const minutes = Math.floor(puzzleTimeRemaining / 60);
    const seconds = puzzleTimeRemaining % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Update display
    document.getElementById('puzzleTimer').textContent = formattedTime;
    
    // Check for time up
    if (puzzleTimeRemaining <= 0) {
        endPuzzleGame();
    }
}

// Function to create a new puzzle
function createNewPuzzle() {
    // Clear the message first
    const puzzleMessage = document.getElementById('puzzleMessage');
    puzzleMessage.textContent = '';
    puzzleMessage.className = 'puzzle-message';
    
    // Clear previous guessed teams
    guessedTeams.clear();
    document.getElementById('guessedFlags').innerHTML = '';
    document.getElementById('flagsIdentified').textContent = 0;
    document.getElementById('countryPuzzleInput').value = '';
    
    // Select random teams
    const availableTeams = teamLogos.filter(team => {
        return team.path && team.name; // Ensure we have both logo and name
    });
    
    if (availableTeams.length < puzzleDifficulty) {
        alert("Not enough teams with logos available.");
        return;
    }
    
    // Select random teams
    mergedLogos = [];
    const selectedIndices = new Set();
    
    while (selectedIndices.size < puzzleDifficulty) {
        const randomIndex = Math.floor(Math.random() * availableTeams.length);
        selectedIndices.add(randomIndex);
    }
    
    // Create merged logos array
    mergedLogos = Array.from(selectedIndices).map(index => {
        return {
            name: availableTeams[index].name,
            logoUrl: availableTeams[index].path
        };
    });
    
    // Create merged logo visualization
    const mergedFlagDiv = document.getElementById('puzzleMergedFlag');
    
    // Clear any previous styles and content
    mergedFlagDiv.style = '';
    mergedFlagDiv.className = 'puzzle-merged-flag';
    mergedFlagDiv.innerHTML = '';
    
    // Decide which merging style to use
    const mergeStyles = ['horizontal-split', 'vertical-split', 'diagonal-split'];
    const randomStyle = mergeStyles[Math.floor(Math.random() * mergeStyles.length)];
    
    if (randomStyle === 'horizontal-split') {
        // Horizontal split (top/bottom) without dividing line
        mergedFlagDiv.style.position = 'relative';
        mergedFlagDiv.style.width = '100%';
        mergedFlagDiv.style.height = '100%';
        mergedFlagDiv.style.backgroundColor = '#f0f0f0'; // Background color to fill any gaps
        
        mergedFlagDiv.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 50%; background-image: url('${mergedLogos[0].logoUrl}'); background-size: contain; background-position: center top; background-repeat: no-repeat;"></div>
            <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 50%; background-image: url('${mergedLogos[1].logoUrl}'); background-size: contain; background-position: center bottom; background-repeat: no-repeat;"></div>
        `;
    } else if (randomStyle === 'vertical-split') {
        // Vertical split (left/right) without dividing line
        mergedFlagDiv.style.position = 'relative';
        mergedFlagDiv.style.width = '100%';
        mergedFlagDiv.style.height = '100%';
        mergedFlagDiv.style.backgroundColor = '#f0f0f0'; // Background color to fill any gaps
        
        mergedFlagDiv.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; background-image: url('${mergedLogos[0].logoUrl}'); background-size: contain; background-position: left center; background-repeat: no-repeat;"></div>
            <div style="position: absolute; top: 0; left: 50%; width: 50%; height: 100%; background-image: url('${mergedLogos[1].logoUrl}'); background-size: contain; background-position: right center; background-repeat: no-repeat;"></div>
        `;
    } else {
        // Diagonal split without dividing line
        mergedFlagDiv.style.position = 'relative';
        mergedFlagDiv.style.width = '100%';
        mergedFlagDiv.style.height = '100%';
        mergedFlagDiv.style.backgroundColor = '#f0f0f0'; // Background color to fill any gaps
        
        mergedFlagDiv.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${mergedLogos[0].logoUrl}'); background-size: contain; background-position: center; background-repeat: no-repeat; clip-path: polygon(0 0, 100% 0, 0 100%);"></div>
            </div>
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${mergedLogos[1].logoUrl}'); background-size: contain; background-position: center; background-repeat: no-repeat; clip-path: polygon(100% 0, 100% 100%, 0 100%);"></div>
            </div>
        `;
    }
    
    // Update the count of total logos
    document.getElementById('totalFlags').textContent = mergedLogos.length;
}
// Function to handle puzzle guess
function handlePuzzleGuess() {
    if (!puzzleIsActive) return;
    
    const countryInput = document.getElementById('countryPuzzleInput');
    const puzzleMessage = document.getElementById('puzzleMessage');
    const submittedGuess = countryInput.value.trim();
    
    // Clear input
    countryInput.value = '';
    
    // Check if already guessed
    if (Array.from(guessedTeams).some(team => team.toLowerCase() === submittedGuess.toLowerCase())) {
        puzzleMessage.textContent = 'You already guessed that team!';
        puzzleMessage.className = 'puzzle-message incorrect-message';
        
        // Apply the animation
        puzzleMessage.classList.add('message-pop');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            puzzleMessage.classList.remove('message-pop');
        }, 300);
        
        return;
    }
    
    // Check if correct (using our team alias checking function)
    const correctTeam = mergedLogos.find(logo => 
        checkTeamGuess(submittedGuess, logo.name)
    );
    
    if (correctTeam) {
        // Add to guessed teams
        guessedTeams.add(correctTeam.name);
        
        // Update UI with animation
        document.getElementById('flagsIdentified').textContent = guessedTeams.size;
        puzzleMessage.textContent = `Correct! You identified ${correctTeam.name}!`;
        puzzleMessage.className = 'puzzle-message correct-message';
        
        // Apply the animation
        puzzleMessage.classList.add('message-pop');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            puzzleMessage.classList.remove('message-pop');
        }, 300);
        
        // Add to guessed logos display
        const guessedFlagsDiv = document.getElementById('guessedFlags');
        const flagElement = document.createElement('div');
        flagElement.className = 'guessed-flag';
        flagElement.textContent = correctTeam.name;
        guessedFlagsDiv.appendChild(flagElement);
        
        // Add points (more points for earlier guesses)
        const pointsPerFlag = 50;
        const timeBonus = Math.floor(puzzleTimeRemaining / 10); // Bonus based on remaining time
        const points = pointsPerFlag + timeBonus;
        puzzleScore += points;
        document.getElementById('puzzleScore').textContent = puzzleScore;
        
        // Check if all logos have been identified
        if (guessedTeams.size === mergedLogos.length) {
            // All logos guessed, create a new puzzle after a delay
            setTimeout(() => {
                // Clear the message before creating a new puzzle
                puzzleMessage.textContent = '';
                puzzleMessage.className = 'puzzle-message';
                createNewPuzzle();
            }, 1000);
        }
    } else {
        // Incorrect guess with animation
        puzzleMessage.textContent = 'Incorrect guess. Try again!';
        puzzleMessage.className = 'puzzle-message incorrect-message';
        
        // Apply the animation
        puzzleMessage.classList.add('message-pop');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            puzzleMessage.classList.remove('message-pop');
        }, 300);
    }
    
    // Focus back on input
    countryInput.focus();
}

// Function to end the game
function endPuzzleGame() {
    puzzleIsActive = false;
    
    // Stop timer
    clearInterval(puzzleTimer);
    
    // Disable input and skip button
    document.getElementById('countryPuzzleInput').disabled = true;
    document.getElementById('submitPuzzleButton').disabled = true;
    document.getElementById('skipPuzzleButton').disabled = true;
    
    // Create game over overlay
    const puzzleContainer = document.querySelector('.puzzle-game-area');
    const gameOverOverlay = document.createElement('div');
    gameOverOverlay.className = 'game-over-overlay';
    
    const gameOverText = document.createElement('div');
    gameOverText.className = 'game-over-text';
    gameOverText.textContent = 'Time\'s Up!';
    
    const finalScore = document.createElement('div');
    finalScore.className = 'final-score';
    finalScore.textContent = `Final Score: ${puzzleScore}`;
    
    gameOverOverlay.appendChild(gameOverText);
    gameOverOverlay.appendChild(finalScore);
    puzzleContainer.appendChild(gameOverOverlay);
    
    // Check for new high score
    if (puzzleScore > puzzleHighScore) {
        puzzleHighScore = puzzleScore;
        setPuzzleHighScore(puzzleHighScore);
        
        // Display high score message
        displayPuzzleHighScoreMessage();
    }
    
    // Reveal any remaining teams
    const unguessedTeams = mergedLogos.filter(logo => 
        !Array.from(guessedTeams).includes(logo.name)
    );
    
    if (unguessedTeams.length > 0) {
        document.getElementById('puzzleMessage').textContent = `Remaining teams: ${unguessedTeams.map(t => t.name).join(', ')}`;
    }
    
    // Automatically remove the overlay after 2 seconds
    setTimeout(() => {
        if (gameOverOverlay && gameOverOverlay.parentNode) {
            gameOverOverlay.parentNode.removeChild(gameOverOverlay);
        }
        
        // Show restart button (renamed to "Try Again")
        const startButton = document.getElementById('startPuzzleButton');
        const restartButton = document.getElementById('restartPuzzleButton');
        
        startButton.style.display = 'none';
        restartButton.style.display = 'block';
        restartButton.textContent = 'Try Again';
    }, 2000);
}

// Function to display high score message
function displayPuzzleHighScoreMessage() {
    // Remove existing message if there is one
    const existingMessage = document.querySelector('.puzzle-high-score-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const newHighScoreMsg = document.createElement('div');
    newHighScoreMsg.textContent = "New High Score!";
    newHighScoreMsg.className = "puzzle-high-score-message";
    
    // Add to the game area
    const messageContainer = document.querySelector('.puzzle-game-area');
    messageContainer.appendChild(newHighScoreMsg);
}

// Function to handle the skip button click
function handleSkipPuzzle() {
    if (!puzzleIsActive) return;
    
    // Create a message showing what the logos were
    const puzzleMessage = document.getElementById('puzzleMessage');
    puzzleMessage.textContent = `Skipped logos: ${mergedLogos.map(t => t.name).join(', ')}`;
    puzzleMessage.className = 'puzzle-message';
    
    // Add a brief timeout before showing the next puzzle
    setTimeout(() => {
        createNewPuzzle();
        
        // Focus the input field after creating a new puzzle
        document.getElementById('countryPuzzleInput').focus();
    }, 1500);
    
    // Temporarily disable the skip button to prevent rapid skipping
    const skipButton = document.getElementById('skipPuzzleButton');
    skipButton.disabled = true;
    
    // Re-enable after new puzzle loads
    setTimeout(() => {
        skipButton.disabled = false;
        
        // Focus the input field again after re-enabling button
        document.getElementById('countryPuzzleInput').focus();
    }, 2000);
}

// Expose the initFlagPuzzle function globally
window.initFlagPuzzle = initFlagPuzzle;

// Add this at the bottom of the file
document.addEventListener('DOMContentLoaded', function() {
    // Set up the Skip button for the puzzle game
    const skipButton = document.getElementById('skipPuzzleButton');
    if (skipButton) {
        skipButton.addEventListener('click', handleSkipPuzzle);
        skipButton.disabled = true; // Start disabled
    }
    
    // Modal functionality for How to Play
    const modal = document.getElementById('howToPlayModal');
    const howToPlayButton = document.getElementById('howToPlayButton');
    const closeButton = document.querySelector('.close-button');
    
    if (modal && howToPlayButton && closeButton) {
        // Open modal when How to Play button is clicked
        howToPlayButton.addEventListener('click', function() {
            modal.style.display = 'block';
        });
        
        // Close modal when X is clicked
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});