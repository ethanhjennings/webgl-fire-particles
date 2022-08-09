precision mediump float;

varying vec4 v_color;
varying highp vec2 v_texture_coord;

uniform sampler2D u_sampler;

void main() {
   vec2 uv = gl_FragCoord.xy/vec2(800,600);
   vec4 texColor = texture2D(u_sampler,v_texture_coord.xy);

   vec4 finalColor;
   finalColor.r = texColor.r*v_color.r;
   finalColor.g = texColor.g*v_color.g;
   finalColor.b = texColor.b*v_color.b;
   finalColor.a = texColor.a*v_color.a;

   gl_FragColor = finalColor;
}
