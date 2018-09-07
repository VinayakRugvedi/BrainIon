let LWindow;
let RWindow;
let Windows = [];
var dQuit;
var choice = [1,2,3,4];
var n;
var heart = '\u2665';
var typeSelected;
var fontBold;
var fontItalic;
var fontRegular;
var sub1 = '"A Game To Enhance The Coordination Between Your Left and Right Brain!!!"'
var sub2 = '"Innovated By a Procrastinator Named - A Vinayak Rugvedi"'
var flag = true;
var type = [0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1]


function setup()
{
	createCanvas(1599,765);
	frameRate(1);

	LWindow = new Window(150,135,500,500,0);
	RWindow = new Window(950,135,500,500,1);

	Windows[0] = LWindow;
	Windows[1] = RWindow;

}

function draw()
{
	background(random(50,200),random(50,200),random(50,200));
	gametext();
	stop();

		n = random(choice);

			typeSelected = random(type)
			Windows[typeSelected].present();
			Windows[typeSelected].update(n);

}


function gametext()
{
	textSize(60);
	fill(0);
	stroke(0);
	strokeWeight(3);
	//textFont(fontBold);
	textFont('georgia');
	text('Brainion+', 675, 65);
	strokeWeight(0);
	textSize(25);
	textFont('cursive');
	text(sub1, 345, 105);
	textSize(45);
	text(sub2, 175, 720);
}


function keyPressed()
{
	if( flag == true )
	if( Windows[typeSelected].respond(n) == 1 )
	{
		stroke(0,0,200);
		strokeWeight(6);
		fill(0,255,0);
		rect( Windows[typeSelected].x, Windows[typeSelected].y, Windows[typeSelected].W, Windows[typeSelected].H );

		fill(0,255,0);
		strokeWeight(6);
		stroke(247,130,4);
		ellipse(800, 382, 150, 150);
	}

	else
		{
			stroke(0,0,200);
			strokeWeight(6);
			fill(255,0,0);
			rect( Windows[typeSelected].x, Windows[typeSelected].y, Windows[typeSelected].W, Windows[typeSelected].H );

			fill(255,0,0);
			strokeWeight(6);
			stroke(247,130,4);
			ellipse(800, 382, 150, 150);
		}

		Windows[0].RHtotal = Windows[0].RHCorrect + Windows[0].RHWrong + Windows[1].RHWrong;
		Windows[1].LHtotal = Windows[1].LHCorrect + Windows[1].LHWrong + Windows[0].LHWrong;
}


function mousePressed()
{
	dQuit = dist(mouseX, mouseY, 800, 382);
}


function stop()
{
	fill(0);
	strokeWeight(6);
	stroke(247,130,4);
	ellipse(800, 382, 150, 150);

	textSize(45);
	strokeWeight(0);
	fill(255);
	textFont('Georgia');
	text('STOP', 745, 400);

	if( dQuit < 75 )
	{
		background(220,80,85);

		fill(0);
		strokeWeight(6);
		stroke(247,130,4);
		ellipse(800, 382, 150, 150);

		textSize(45);
		strokeWeight(0);
		fill(255);

		gametext();


		stroke(0,0,200);
		strokeWeight(6);
		fill(0);
		rect( Windows[0].x, Windows[0].y, Windows[0].W, Windows[0].H );
		rect( Windows[1].x, Windows[1].y, Windows[1].W, Windows[1].H );
		finalLDisplay();
		finalRDisplay();

		exit();
		//remove();
		//setTimeout(stop, 1000);
	}
}


function finalLDisplay()
{
	var sper = 0;

	strokeWeight(0);
	textSize(50);
	fill(200, 0, 0);
	textFont('Georgia');
	text('Left Brain!', 275, 185);

	textSize(30);
	fill(247,130,4);
	text('Analysis of Right Hand...', 230, 230);

	textSize(30);
	fill(0, 200, 0);
	text('Total Number of Keys Pressed : ', 170, 275);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text(Windows[0].RHtotal, 595, 275);

	textSize(30);
	strokeWeight(0);
	fill(0, 200, 0);
	text('Successful Key Presses : ', 220, 325);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text(Windows[0].RHCorrect, 545, 325);

	textSize(30);
	strokeWeight(0);
	fill(0, 200, 0);
	text('Unsuccessful Key Presses : ', 200, 375);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text((Windows[0].RHWrong + Windows[1].RHWrong), 560, 375);

	textSize(30);
	strokeWeight(0);
	fill(0, 200, 0);
	text('Unwanted Key Presses : ', 225, 425);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text(Windows[1].RHWrong, 550, 425);

	if( Windows[0].RHtotal!= 0 )
	sper = (Windows[0].RHCorrect/Windows[0].RHtotal)*100;
	sper = ceil(sper);

	textSize(30);
	strokeWeight(0);
	fill(0, 200, 0);
	text('Success % of Right Hand : ', 200, 475);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text(sper+'%', 555, 475);

	if( sper <= 50 )
	{
		textSize(40);
		strokeWeight(2);
		fill(200, 0, 0);
		text('Need to improve!!!', 235, 550);
	}
	else
	{
		textSize(40);
		strokeWeight(2);
		fill(200, 0, 0);
		text('Well Done!!!', 285, 550);
	}

	textSize(50);
	fill(220,80,85);
	text(heart,390,610);
	flag = false;
}


function finalRDisplay()
{
	var sper = 0;
	strokeWeight(0);
	textSize(50);
	fill(200, 0, 0);
	textFont('Georgia');
	text('Right Brain!', 1060, 185);

	textSize(30);
	fill(247,130,4);
	text('Analysis of Left Hand...', 1040, 230);

	textSize(30);
	fill(0, 200, 0);
	text('Total Number of Keys Pressed : ', 970, 275);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text(Windows[1].LHtotal, 1395, 275);

	textSize(30);
	strokeWeight(0);
	fill(0, 200, 0);
	text('Successful Key Presses : ', 1020, 325);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text(Windows[1].LHCorrect, 1345, 325);

	textSize(30);
	strokeWeight(0);
	fill(0, 200, 0);
	text('Unsuccessful Key Presses : ', 1000, 375);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text((Windows[1].LHWrong + Windows[0].LHWrong), 1360, 375);

	textSize(30);
	strokeWeight(0);
	fill(0, 200, 0);
	text('Unwanted Key Presses : ', 1025, 425);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text((Windows[0].LHWrong + Windows[0].LHWrong), 1350, 425);

	if( Windows[1].LHtotal != 0 )
	sper = (Windows[1].LHCorrect/Windows[1].LHtotal)*100;
	sper = ceil(sper);

	textSize(30);
	strokeWeight(0);
	fill(0, 200, 0);
	text('Success % of Left Hand : ', 1005, 475);
	fill(200,0,0);
	stroke(200, 0, 0);
	strokeWeight(3);
	text(sper+'%', 1340, 475);

	if( sper <= 50 )
	{
		textSize(40);
		strokeWeight(2);
		fill(200, 0, 0);
		text('Need to improve!!!', 1035, 550);
	}
	else
	{
		textSize(40);
		strokeWeight(2);
		fill(200, 0, 0);
		text('Well Done!!!', 1085, 550);
	}

	textSize(50);
	fill(220,80,85);
	text(heart,1190,610);

	flag = false;

}

class Window
{
	constructor(x, y, W, H, t)
	{
		this.x = x;
		this.y = y;
		this.W = W;
		this.H = H;
		this.Win = t; // 0 = Left Brain and 1 = Right Brain
		this.LHCorrect = 0;
		this.LHWrong = 0;
		this.RHCorrect = 0;
		this.RHWrong = 0;
		this.LHtotal = 0;
		this.RHtotal = 0;
	}

	present()
	{
		strokeWeight(6);
		fill(255);
		stroke(0,0,200);
		rect( this.x, this.y, this.W, this.H );
		stroke(0,0,200);
		line( this.x, this.y, this.x + 500, this.y + 500 );
		line( this.x, this.y + 500, this.x + 500, this.y );


		strokeWeight(6);
		stroke(200,0,0);

    //Top Triangle
		triangle(this.x+80, this.y+30, this.x+250, this.y+200, this.x+420, this.y+30);

		//Right Triangle
		triangle(this.x+470, this.y+80, this.x+470, this.y+420, this.x+300, this.y+250);

		//Bottom Triangle
		triangle(this.x+80, this.y+470, this.x+420, this.y+470, this.x+250, this.y+300);

		//Left Triangle
		triangle(this.x+30, this.y+80, this.x+30, this.y+420, this.x+200, this.y+250);
	}

	update(tri)
	{
		fill(247,130,4);

			if(tri == 1)
			{
						//Top Triangle
						triangle(this.x+80, this.y+30, this.x+250, this.y+200, this.x+420, this.y+30);
			}

			else if(tri == 2)
			{
				 		//Right Triangle
				 		triangle(this.x+470, this.y+80, this.x+470, this.y+420, this.x+300, this.y+250);
			}

			else if(tri == 3)
			{
						//Bottom Triangle
				 		triangle(this.x+80, this.y+470, this.x+420, this.y+470, this.x+250, this.y+300);
			}

			else if(tri == 4)
			{
						//Left Triangle
				 		triangle(this.x+30, this.y+80, this.x+30, this.y+420, this.x+200, this.y+250);
			}
	}

	respond(tri)
	{
		if(this.Win == 0)
		{
				if( tri == 1 && key == '&')
				{
					this.RHCorrect++;
					return true;
				}

				else if( tri == 2 && key == '\'')
				{
					this.RHCorrect++; return true;
				}
				else if( tri == 3 && key == '(')
				{
					this.RHCorrect++; return true;
				}
				else if( tri == 4 && key == '%')
				{
					this.RHCorrect++; return true;
				}

					else
					{
						if( key == '&' || key == '\'' || key == '(' || key == '%' )
						{
								this.RHWrong++;
								return false;
						}
						else if( (key == 'W' || key == 'w') || (key == 'D' || key == 'd') || (key == 'S' || key == 'd') || (key == 'A' || key == 'a') )
							{
									this.LHWrong++;
									return false;
							}
					}
		}
		else if(this.Win == 1)
		{
			if( tri == 1 && (key == 'W' || key == 'w'))
			{
				this.LHCorrect++; return true;
			}
			else if( tri == 2 && (key == 'D' || key == 'd'))
			{
				this.LHCorrect++; return true;
			}
			else if( tri == 3 && (key == 'S' || key == 'd'))
			{
				this.LHCorrect++; return true;
			}
			else if( tri == 4 && (key == 'A' || key == 'a'))
			{
				this.LHCorrect++; return true;
			}

				else
				{
					if( (key == 'W' || key == 'w') || (key == 'D' || key == 'd') || (key == 'S' || key == 'd') || (key == 'A' || key == 'a') )
					{
						this.LHWrong++;
						return false;
					}

					else if(  key == '&' || key == '\'' || key == '(' || key == '%' )
					{
							this.RHWrong++;
							return false;
					}
				}

		 }
	}

}
