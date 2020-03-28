---
draft: true
title: {{ replace .Name "-" " " | title }}
date: {{ dateFormat "2006-01-02" .Date }}

# displays the coverimage - please use landscape-format photos
# please refrain from using copyrighted photos!
coverimage: {{ .Name }}.jpg

# shows a subtitle under the heading
subtitle: ""

# here you can add some meaningful tags
tags:
  - fish

# from which country does this recipe originate?
country: korea

# is this a copied recipe? (if yes, then set to true)
copyrighted: false

# how healthy is this recipe? (scale from 1 to 3 - 1 is best)
healthlevel: 1

# how many people does this meal serve?
servings: 3

# how long does it take to cook? (in minutes)
duration: 15

# when was this recipe added to the cookbook?
date: 2020-03-28

# who added this recipe to the cookbook?
author: name

# list of the ingredients used
ingredients:
  - 2 tbsp butter

# list of specialist utensils required (optional)
utensils:

# add the instructions below in markdown-syntax
---

1. Lorem ipsum

<!--
  created {{ now }}
-->
