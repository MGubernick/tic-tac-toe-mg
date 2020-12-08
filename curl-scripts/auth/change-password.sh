# ID=5e5fe896c6aeaea8cbff68ca TOKEN=33ad6372f795694b333ec5f329ebeaaa EMAIL="" PASSWORD="" sh curl-scripts/movies/update.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
