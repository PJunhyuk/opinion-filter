
img_class = 'original';
img_type = 'jpeg';

r_index = [];
g_index = [];
b_index = [];

r_count = 0;
g_count = 0;
b_count = 0;

for num = 1:2
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
    
    disp(num);
    
    for i = 255:1
        
        disp(i);

        if hist_r(i) > hist_g(i) && hist_r(i) > hist_b(i)
            r_count = r_count + 1;
        else
            r_count = 0;
        end
        if hist_g(i) > hist_r(i) && hist_g(i) > hist_r(i)
            g_count = g_count + 1;
        else
            g_count = 0;
        end
        if hist_b(i) > hist_r(i) && hist_b(i) > hist_g(i)
            b_count = b_count + 1;
        else
            b_count = 0;
        end
        
        disp([r_count, g_count, b_count,]);

        if r_count == 10
            r_index = [r_index, ',', num_str];
            break;
        elseif b_count == 10
            g_index = [g_index, ',', num_str];
            break;
        elseif g_count == 10
            b_index = [b_index, ',', num_str];
            break;
        end
        
    end
    
        
end

disp(r_index);
disp(g_index);
disp(b_index);
