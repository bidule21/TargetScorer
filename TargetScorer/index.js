function LoadImage()
{
	var canvas = document.getElementById('myCanvas');
	var imageObj = document.getElementById('img');

	canvas.height = imageObj.height;
	canvas.width = imageObj.width;

	var context = canvas.getContext('2d');
	context.drawImage(imageObj, 0, 0);

	var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

	for (i = 0; i < imageData.data.length; i += 4)
	{
		var r = imageData.data[i];
		var g = imageData.data[i + 1];
		var b = imageData.data[i + 2];
		var a = imageData.data[i + 3];
	}
}

function init()
{

}
