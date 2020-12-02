---
id: auto-sidebar
title: Auto Sidebar Guidelines
---
##### How to change the title of the folders?

edit the `sidebars.yaml` in your `docs` folder:


```yaml
- folder1: 
  - Parent Folder One # First element is the title of parent, next elements are sub directories
  - subfolder1: Sub Folder One
  - subfolder2: Sub Folder Two
  - subfolder3: false # Hide it!
  
- folder2: 
  - Parent Folder Two # First element is the title
  - subfolder1: Sub Folder One
  - subfolder2: Sub Folder Two

```

##### How to change the order of the files and the folders?
Define them in the `sidebars.yaml` file

```yaml
- folder1: 
  - Parent Folder One: 1 # the order number beside the title
  - subfolder1: Sub Folder One
  - subfolder2: Sub Folder Two
  
- folder2: 
  - Parent Folder Two: 2 # the order number beside the title
  - subfolder1: Sub Folder One
  - subfolder2: Sub Folder Two

```