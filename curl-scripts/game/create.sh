# EMAIL="" PASSWORD="" sh curl-scrips/game/create.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/create" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
