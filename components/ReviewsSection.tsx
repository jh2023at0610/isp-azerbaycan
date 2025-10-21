'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { providers } from '../data/providers';
import { Star, MessageCircle, Send } from 'lucide-react';

interface Review {
  id: string;
  providerId: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export default function ReviewsSection() {
  const t = useTranslations('reviews');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string>('katv');
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
    author: '',
  });

  useEffect(() => {
    // Load reviews from localStorage
    const savedReviews = localStorage.getItem('isp-reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.comment.trim() || !newReview.author.trim()) {
      alert('Zəhmət olmasa bütün sahələri doldurun');
      return;
    }

    const review: Review = {
      id: Date.now().toString(),
      providerId: selectedProvider,
      rating: newReview.rating,
      comment: newReview.comment,
      author: newReview.author,
      date: new Date().toLocaleDateString('az-AZ'),
    };

    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
    localStorage.setItem('isp-reviews', JSON.stringify(updatedReviews));

    // Reset form
    setNewReview({
      rating: 5,
      comment: '',
      author: '',
    });

    alert('Rəyiniz uğurla əlavə edildi!');
  };

  const getProviderReviews = (providerId: string) => {
    return reviews.filter(review => review.providerId === providerId);
  };

  const getAverageRating = (providerId: string) => {
    const providerReviews = getProviderReviews(providerId);
    if (providerReviews.length === 0) return 0;
    
    const sum = providerReviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / providerReviews.length;
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('addReview')}
            </h3>
            
            <form onSubmit={handleSubmitReview} className="space-y-6">
              {/* Provider Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Provayder seçin
                </label>
                <select
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {providers.map((provider) => (
                    <option key={provider.id} value={provider.id}>
                      {provider.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reytinq
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className={`p-1 ${
                        star <= newReview.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      } hover:text-yellow-400 transition-colors`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adınız
                </label>
                <input
                  type="text"
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Adınızı daxil edin"
                  required
                />
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şərh
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Təcrübənizi paylaşın..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Rəyi göndər
              </button>
            </form>
          </div>
        </div>

        {/* Reviews Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {providers.map((provider) => {
            const providerReviews = getProviderReviews(provider.id);
            const averageRating = getAverageRating(provider.id);
            
            return (
              <div key={provider.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-900">
                          {averageRating > 0 ? averageRating.toFixed(1) : 'Rəy yoxdur'}
                        </span>
                      </div>
                      <span className="text-gray-500">
                        ({providerReviews.length} rəy)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {t('averageRating')}
                    </div>
                    <div className="text-2xl font-bold text-primary-600">
                      {averageRating > 0 ? averageRating.toFixed(1) : '-'}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {providerReviews.length > 0 ? (
                    providerReviews.map((review) => (
                      <div key={review.id} className="border-l-4 border-primary-200 pl-4 py-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-3 h-3 ${
                                  star <= review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {review.author}
                          </span>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{review.comment}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Hələ rəy yoxdur</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
