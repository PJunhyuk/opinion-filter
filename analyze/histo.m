%% Customizable
num = 39;
img_class = 'original';
img_type = 'jpg';

%% Draw Color Histogram
num = num2str(num);

img_path = strcat('./../opinion-filter/frontend/src/assets/dataset/image_', num, '/image_', num, '_', img_class, '.', img_type);
img = imread(img_path);
img = double(img);

r = img(:,:,1);
g = img(:,:,2);
b = img(:,:,3);

f = figure;
histogram(r,'BinMethod','integers','FaceColor','r','EdgeAlpha',0,'FaceAlpha',1);
hold on
histogram(g,'BinMethod','integers','FaceColor','g','EdgeAlpha',0,'FaceAlpha',0.7)
histogram(b,'BinMethod','integers','FaceColor','b','EdgeAlpha',0,'FaceAlpha',0.7)
xlabel('RGB value')
ylabel('Frequency')
title('Color histogram in RGB color space')
xlim([0 257])

saveas(f, strcat('histo_image_', num, '_', img_class, '.png'));
close(f);
