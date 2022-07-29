#include <FastLED.h>

FASTLED_USING_NAMESPACE

// FastLED "100-lines-of-code" demo reel, showing just a few 
// of the kinds of animation patterns you can quickly and easily 
// compose using FastLED.  
//
// This example also shows one easy way to define multiple 
// animations patterns and have them automatically rotate.
//
// -Mark Kriegsman, December 2014

#if defined(FASTLED_VERSION) && (FASTLED_VERSION < 3001000)
#warning "Requires FastLED 3.1 or later; check github for latest code."
#endif

#define DATA_PIN    4
//#define CLK_PIN   4
#define LED_TYPE    WS2811
#define COLOR_ORDER GRB
#define NUM_LEDS    28
CRGB leds[NUM_LEDS];

#define BRIGHTNESS          96
#define FRAMES_PER_SECOND  120

byte btnpin = 6;
byte h1 = 30;
byte s1 = 250;

int LEDL = 12;
byte LEDR = 15;

int LEDLant = 13;
int LEDLpos = 11;
byte LEDRant = 14;
byte LEDRpos = 16;

byte vLED = 250;
byte vLEDant = 0;
byte vLEDpos = 250;

byte vel = 125;

byte vel2 = 5;

byte LEDCL = 13;
byte LEDCR = 14;

byte LEDPL = 12;
byte LEDPR = 15;

byte LEDoffL = 14;
byte LEDoffR = 13;

byte VC = 0;
byte VP = 0;
boolean aumento = true;
boolean dispersion = false;

void setup() {
  delay(3000); // 3 second delay for recovery

  pinMode(btnpin, INPUT_PULLUP);
  
  // tell FastLED about the LED strip configuration
  FastLED.addLeds<LED_TYPE,DATA_PIN,COLOR_ORDER>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  //FastLED.addLeds<LED_TYPE,DATA_PIN,CLK_PIN,COLOR_ORDER>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);

  // set master brightness control
  FastLED.setBrightness(BRIGHTNESS);
}


// List of patterns to cycle through.  Each is defined as a separate function below.
typedef void (*SimplePatternList[])();
SimplePatternList gPatterns = { aperture2, confetti, sinelon, aperture };

uint8_t gCurrentPatternNumber = 0; // Index number of which pattern is current
uint8_t gHue = 0; // rotating "base color" used by many of the patterns
  
void loop()
{
  // Call the current pattern function once, updating the 'leds' array
  gPatterns[gCurrentPatternNumber]();

  // send the 'leds' array out to the actual LED strip
  FastLED.show();  
  // insert a delay to keep the framerate modest
  FastLED.delay(1000/FRAMES_PER_SECOND); 

  // do some periodic updates
  EVERY_N_MILLISECONDS( 20 ) { gHue++; } // slowly cycle the "base color" through the rainbow
  //EVERY_N_SECONDS( 10 ) { nextPattern(); } // change patterns periodically

  boolean button = digitalRead(btnpin);
  if (button == false){
    nextPattern();
    delay(300);
  }
}

#define ARRAY_SIZE(A) (sizeof(A) / sizeof((A)[0]))

void nextPattern()
{
  // add one to the current pattern number, and wrap around at the end
  gCurrentPatternNumber = (gCurrentPatternNumber + 1) % ARRAY_SIZE( gPatterns);
}

void confetti() 
{
  // random colored speckles that blink in and fade smoothly
  fadeToBlackBy( leds, NUM_LEDS, 10);
  int pos = random16(NUM_LEDS);
  leds[pos] += CHSV( 25, 200, 255);
}

void sinelon()
{
  // a colored dot sweeping back and forth, with fading trails
  fadeToBlackBy( leds, NUM_LEDS, 20);
  int pos = beatsin16( 13, 0, NUM_LEDS-1 );
  leds[pos] += CHSV( 30, 255, 192);
}

void aperture(){
  vLEDant = vLEDant - vel;
  vLEDpos = vLEDpos + vel;
  vLED = 250;

  if((LEDL <= 0) &&(vLED >= 250)){
      LEDL = 14;
    }
    if((LEDLant <= 0) && (vLEDant <= 0)){
      LEDLant = 14;
    }
    if((LEDLpos <= 0) && (vLEDpos >= 250)){
      LEDLpos = 14;
    }

    if(LEDR > 27){
      LEDR = 14;
    }
    if(LEDRant > 27){
      LEDRant = 14;
    }
    if(LEDRpos > 27){
      LEDRpos = 14;
    }
    
  if(vLEDpos >= 250){
    vLEDpos = 0;
    vLEDant = 250;
    vLED = 250;
    
    if(LEDL > 0){
      LEDL--;
    }
    if(LEDLpos > 0){
      LEDLpos--;
    }
    if(LEDLant > 0){
      LEDLant--;
    }
    
    LEDR++;
    LEDRpos++;
    LEDRant++;
    
  }
  leds[LEDR] = CHSV(h1,s1,vLED);
  leds[LEDRant] = CHSV(h1,s1,vLEDant);
  leds[LEDRpos] = CHSV(h1,s1,vLEDpos);
  leds[LEDL] = CHSV(h1,s1,vLED);
  leds[LEDLant] = CHSV(h1,s1,vLEDant);
  leds[LEDLpos] = CHSV(h1,s1,vLEDpos);
}

void aperture2() {
  if((VC < 250) && (aumento == true)){
    VC = VC + vel2;
    VP = VP + vel2;
    
    LEDPL = 12;
    LEDPR = 15; 
    leds[LEDPL] = CHSV(h1,s1,VP);
    leds[LEDPR] = CHSV(h1,s1,VP);

  }
  
  if(VC == 250){
    aumento = false;
    dispersion = true;
  }

  if((VC > 0) && (aumento == false)){
    VC = VC - vel2;
    
    if (VP > 0){
      VP = VP - vel2;
    }
  }
  
  if(VC == 0){
    aumento = true;
    VP = 0;
    delay(500);
  }

  if (dispersion == true){

    if(LEDPL > 0){
      LEDPL--;
      LEDPR++;
      if(VP > 10){
        VP = VP - vel2 * 2;
      }
      
      
      if(LEDoffL > 0){
        LEDoffL--;
        LEDoffR++;
        leds[LEDoffL] = CHSV(h1,s1,0);
        leds[LEDoffR] = CHSV(h1,s1,0);
      }

      if(LEDoffL == 0){
        LEDoffL = 14;
        LEDoffR = 13;
        dispersion = false;
      }
     delay(7);
    }
    
    if(LEDPL == 0){
        VP = 0;
        dispersion == false;
        leds[1] = CHSV(h1,s1,0);
        leds[26] = CHSV(h1,s1,0);
    }
  }
  
  
    
  leds[LEDCL] = CHSV(h1,s1,VC);
  leds[LEDCR] = CHSV(h1,s1,VC);
  leds[LEDPL] = CHSV(h1,s1,VP);
  leds[LEDPR] = CHSV(h1,s1,VP);
}
