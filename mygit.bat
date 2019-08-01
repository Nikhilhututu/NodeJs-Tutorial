
@ECHO OFF 
ECHO Start update on git with Heroku....
ECHO ===========Start==File Add===============
git add .
ECHO ===========Commit==File===============
git commit -m "f5" 
ECHO ===========push==File===============
git push
ECHO ===========pull==File===============
git pull
ECHO ===========push heroku==File===============
git push heroku
ECHO ===========Open Project===============
heroku open
PAUSE