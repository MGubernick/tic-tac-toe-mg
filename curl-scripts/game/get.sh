# sh curl-scripts/games/get.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"

echo
