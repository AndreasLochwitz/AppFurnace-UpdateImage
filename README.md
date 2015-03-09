# AppFurnace-UpdateImage
Update all images in [AppFurnace](http://appfurnace.com/) that contains a similiar part in the code name

_Example_

You have a range of images in your Application and want to update them to the same image.

Let's assume you have this name:

	ui.page1_status
	ui.page2_status
	ui.status4

To change them all at once use this call:

	updateImage("status", "default/theNewImage.png");

## Howto install

Copy the function **updateImage** into the _Code_ View of [AppFurance](http://appfurnace.com/). Or you can inject the Javascript file dynamically.