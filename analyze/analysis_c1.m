
img_class = 'original';
img_type = 'jpeg';
c1_index = [];

for num = 1:112
    if num > 17
        img_type = 'jpg';
    end
    
    num_str = num2str(num);

    img_path = strcat('./../opinion-filter/frontend/src/assets/dataset/image_', num_str, '/image_', num_str, '_', img_class, '.', img_type);
    img = imread(img_path);

    r = img(:,:,1);
    g = img(:,:,2);
    b = img(:,:,3);

    hist_r = imhist(r);
    hist_g = imhist(g);
    hist_b = imhist(b);

    sum_50_r = sum(hist_r(1:30));
    sum_50_g = sum(hist_g(1:30));
    sum_50_b = sum(hist_b(1:30));

    if sum_50_b > sum_50_g * 1.7
        if sum_50_b > sum_50_r * 1.7
            c1_index = [c1_index, ',', num_str];
        end
    end
end

disp(c1_index);