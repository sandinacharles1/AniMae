# HTML
## 8/6 - 8/8
Tags <a></a>
Basic Headers / text (h1, h2, ... h6, p)
Hyperlinks <a href:"type:name" Words></a>
Lists <ul> or <ol> for Unordered or Ordered. Then indented <li> for list item
Images <img src="link" alt="name" width="" height -"">
Sections / div: Sections' items are connected logically but div is kinda random. Niceely used to css things together
Button <button>Name</button>

id is used to identify later in css or js with #
class is a group of things that can all be edited together with css or js
DropDown: <select> and indented <option value=""Label></option>. Makes a dropdown, each option has a value that can be used later in json. You can have <optgroup label"groupname"> to group options
Checkbox: Smush between label tags and use input and choose from a list of types. <input type="checkbox" id="name">

<!DOCTYPE html>: -displays page based on newest html standard
<html lang="en">Chooses language for search engines
<head> tags Holds metadata about page includes all the below:
<title> tags hold browser tab name  
    <meta charset="UTF-8"> :Character encoding for page
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> :-makes page responsive to different screen sizes
    <link rel="stylesheet" href="style.css"> : hyperlink to external CSS file
    <script src="script.js" defer></script>: -hyperlink to external JS file, 

# JSON
## 8/6 - 8/8
Very similar to c++. Initialize changing variables with let varName = value, and if constannt, replace let with const
Get specific IDed elements from html by using documentgetElementById("id")
Get anything from the first instance of class, to id with document.querySeleector(). If you want all instances, use document.querySelectorAll()
Change html with dot. once u get the item(s) into a variable using the things above, you can remove like element.textContent = "changed text".  or use dot produdct into style and change, like element.styke.color = "pink", in my case, to hide the search bar and only make it appear, i use title.classList.remove("hidden") to remove the hiddenn class that hdies it. If i want to hide it again ill probably do element.classList.add("hidden"). Apparently theres an element.classList.toggle("hidden")
Most importantly, EVENTS. when an event happens (like when you click something), you can trigger something. so: element.addEventListener(event, function() => {response;});
# CSS
## 8/6 - 8/8
create new parameter! with font you use font=family to change title, and import your own type font file into a folder in our project directory. we can now use the font using its font family
@font-face{
    font-family: "Title";
    src: url("Fonts/Title.otf"); /*Path relative to CSS file*/
}
Classes that group up items are relevanmt. lik h1 or p. if its a custom include a .CustomName. if they all should be the same, add with comma between. use # for specific ids.

Note about alignment, use flex-direction but make display:flex first. /justifyinbg works along the axis of direction, and aligning words to align other pieces of parallel axes (if that makes sense??). Honestly if u need to see what soemthing does, use ctrl+space.

Css overlap! so if one secion / thing shares multiple classses that unintentionally overlap, it will choose the last class to be defined. If it shares a class and id, the id will override the class with the overlapped stuff because its nore specific.