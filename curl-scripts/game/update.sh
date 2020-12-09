
curl "https://tic-tac-toe-api-development.herokuapp.com/update" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
      "game": {
        "cell": {
          "index": 0,
          "value": "x"
        },
        "over": false
      }
    }'

echo
